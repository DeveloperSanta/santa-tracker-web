import { Rectangle } from './collision-2d.js';

const { Vector2 } = self.THREE;

// @see https://gamedevelopment.tutsplus.com/tutorials/quick-tip-use-quadtrees-to-detect-likely-collisions-in-2d-space--gamedev-374
export class QuadTree {
  constructor(depth, bounds, measureBounds = () => {}, maxObjects = 10, maxDepth = 5) {
    this.depth = depth;
    this.bounds = bounds;
    this.measureBounds = measureBounds;
    this.maxObjects = maxObjects;
    this.maxDepth = maxDepth;

    this.nodes = [];
    this.objects = [];
  }

  get tl() { return this.nodes[0]; }
  get bl() { return this.nodes[1]; }
  get tr() { return this.nodes[2]; }
  get br() { return this.nodes[3]; }

  clear() {
    this.objects = [];

    for (let i = 0; i < this.nodes.length; ++i) {
      this.nodes[i].clear();
    }

    this.nodes = [];
  }

  split() {
    const { halfWidth, halfHeight, x, y } = this.bounds;

    for (let j = -1, i = 0; j < 2; j += 2) {
      for (let k = -1; k < 2; k += 2, i++) {
        const rectangle = Rectangle.allocate(halfWidth, halfHeight,
            new Vector2(x + j * halfWidth, y + k * halfHeight));
        this.nodes[i] = new QuadTree(this.depth + 1, rectangle,
            this.measureBounds, this.maxObjects, this.maxDepth);
      }
    }
  }

  getQuadrantIndex(rectangle) {
    for (let i = 0; i < this.nodes.length; ++i) {
      const node = this.nodes[i];
      if (node.bounds.contains(rectangle)) {
        return i;
      }
    }

    return -1;
  }

  redistributeObjects() {
    if (this.nodes.length === 0) {
      this.split();
    }

    let i = 0;

    while (i < this.objects.length) {
      const length = this.objects.length;
      const object = this.objects.shift();

      this.insert(object);

      if (length === this.objects.length) {
        i++;
      }
    }
  }

  insert(object) {
    const bounds = this.measureBounds(object);

    if (bounds == null) {
      console.warn('Object bounds could not be measured:', object);
      return;
    }

    const quadrantIndex = this.getQuadrantIndex(bounds);

    if (quadrantIndex > -1) {
      this.nodes[quadrantIndex].insert(object);
    } else {
      this.objects.push(object);

      if (this.objects.length > this.maxObjects && this.depth < this.maxDepth) {
        this.redistributeObjects();
      }
    }
  }

  remove(object) {
    const index = this.objects.indexOf(object);

    if (index > -1) {
      this.objects.splice(index, 1);
    } else {
      const bounds = this.measureBounds(object);
      const quadrantIndex = this.getQuadrantIndex(bounds);

      if (quadrantIndex > -1) {
        this.nodes[quadrantIndex].remove(object);
      }
    }
  }

  getObjectsNear(object) {
    const bounds = this.measureBounds(object);
    const quadrantIndex = this.getQuadrantIndex(bounds);
    const results = quadrantIndex > -1
        ? this.nodes[quadrantIndex].getNearbyObjects
        : [];

    return results.concat(this.objects);
  }
};

