'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var poly = function poly(x, y, sides, r) {
  var points = [];
  for (var i = 0; i < sides; i++) {
    var X = x + Math.cos(Math.PI * 2 / sides * i) * r;
    var Y = y + Math.sin(Math.PI * 2 / sides * i) * r;
    points.push([X, Y]);
  }
  return points;
};

var setCanvasSize = function setCanvasSize(id, w, h) {
  var c = document.getElementById(id);
  c.setAttribute('width', w);
  c.setAttribute('height', h);
};

var fill = function fill(ctx) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var b = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 255;

  ctx.fillStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
};

var noFill = function noFill(ctx) {
  fill(ctx, 0, 0, 0, 0);
};

var background = function background(ctx) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var b = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 255;
  var w = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 500;
  var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 500;

  fill(ctx, r, g, b, a);
  ctx.fillRect(0, 0, w, h);
};

var stroke = function stroke(ctx) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var g = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var b = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 255;

  ctx.strokeStyle = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
};

var noStroke = function noStroke(ctx) {
  stroke(ctx, 0, 0, 0, 0);
};

var strokeWeight = function strokeWeight(ctx, weight) {
  ctx.lineWidth = weight;
};

var line = function line(ctx, v, v2) {
  ctx.beginPath();
  ctx.moveTo.apply(ctx, _toConsumableArray(v));
  ctx.lineTo.apply(ctx, _toConsumableArray(v2));
  ctx.stroke();
  ctx.closePath();
};

var ellipse = function ellipse(ctx, v, r) {
  ctx.beginPath();
  ctx.arc.apply(ctx, _toConsumableArray(v).concat([r, 0, Math.PI * 2, false]));
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
};

var drawPoly = function drawPoly(ctx, ps) {
  ctx.beginPath();
  ctx.moveTo.apply(ctx, _toConsumableArray(ps[0]));
  for (var i = 1; i < ps.length; i++) {
    ctx.lineTo.apply(ctx, _toConsumableArray(ps[i]));
  }
  ctx.lineTo.apply(ctx, _toConsumableArray(ps[0]));
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

var rect = function rect(ctx, pos, w, h) {
  ctx.rect.apply(ctx, _toConsumableArray(pos).concat([w, h]));
};

/* start exports */
exports.setCanvasSize = setCanvasSize;
exports.background = background;
exports.stroke = stroke;
exports.poly = poly;
exports.fill = fill;
exports.noFill = noFill;
exports.noStroke = noStroke;
exports.strokeWeight = strokeWeight;
exports.line = line;
exports.ellipse = ellipse;
exports.drawPoly = drawPoly;
/* end exports */