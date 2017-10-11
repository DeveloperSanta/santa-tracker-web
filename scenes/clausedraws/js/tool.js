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

goog.provide('app.Tool');
goog.require('app.shared.utils');


/**
 * Base tool item
 * @constructor
 * @param {!jQuery} $elem toolbox elem
 * @param {string} name The name of the tool.
 * Element should have class Tool-name.
 * @param {{x: number, y: number}} mouseOffset Tool offset relative to the mouse
 */
app.Tool = function($elem, name, mouseOffset) {
  this.elem = $elem;
  this.el = this.elem.find('.Tool-' + name);
  this.container = this.el.closest('.Tool-container');
  this.isSelected = false;
  this.mouseOffset = mouseOffset || {x: 0, y: 0};
};


/**
 * Select this tool from the toolbox
 * @param {!app.Mouse.CoordsType} mouseCoords at selection time
 */
app.Tool.prototype.select = function(mouseCoords) {
  this.isSelected = true;

  this.el.addClass('Tool--selected');
  this.width = this.el.width();

  if (app.shared.utils.touchEnabled) {
    this.elem.css({ 'background-size': 0 }); // Hide tool on touch devices
  } else {
    this.elem.css({ cursor: 'none' });
  }

  this.move(mouseCoords);
  window.santaApp.fire('sound-trigger', 'selfie_click');
};


/**
 * Deselect this tool
 */
app.Tool.prototype.deselect = function() {
  this.isSelected = false;

  this.el.removeClass('Tool--selected Tool--left Tool--right Tool-hairdryer--center');
  this.el.css({
    top: '',
    left: ''
  });
  this.elem.css({
    cursor: ''
  });
};


/**
 * Move the tool to the specified mouse position
 * @param {!app.Mouse.CoordsType} mouseCoords transformed coords
 */
app.Tool.prototype.move = function(mouseCoords) {
  var offsetX = this.mouseOffset.x;

  this.el.css({
    left: mouseCoords.x - (offsetX * mouseCoords.scale),
    top: mouseCoords.y - (this.mouseOffset.y * mouseCoords.scale) + window.santaApp.headerSize,
  });
};


/**
 * Draws to the canvas using this tool
 * @param  {[type]} context     [description]
 * @param  {[type]} mouseCoords [description]
 * @return {[type]}             [description]
 */
app.Tool.prototype.draw = function(context, mouseCoords) {
  return null;
}
