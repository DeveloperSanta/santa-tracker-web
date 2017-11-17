/*
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

goog.provide('app.SprinkleSpray');
goog.require('app.Constants');
goog.require('app.SprayPattern');


/**
 * Spray can that sprays sprinkles
 * @constructor
 * @extends {app.SprayPattern}
 * @param {!jQuery} $elem toolbox elem
 * @param {!string} name The name of the tool.
 */
app.SprinkleSpray = function($elem, name) {
  app.SprayPattern.call(this, $elem, name);

  this.images = [
    { elem: $elem.find('#sprinkle2')[0] },
    { elem: $elem.find('#sprinkle3')[0] },
    { elem: $elem.find('#sprinkle4')[0] },
    { elem: $elem.find('#sprinkle5')[0] }
  ];

  this.populateImageDimensions();
};
app.SprinkleSpray.prototype = Object.create(app.SprayPattern.prototype);

