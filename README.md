# Microcan - micro framework for painless canvas

## API Documentation

* `poly: (x, y, sides, radius)`
* `setCanvasSize: (id, width, height)`
* `fill: (ctx, r = 0, g = 0, b = 0, a = 255)`
* `noFill: (ctx)`
* `background: (ctx, r = 0, g = 0, b = 0, a = 255, w = 500, h = 500)`
* `stroke:  (ctx, r = 0, g = 0, b = 0, a = 255)`
* `noStroke: (ctx)`
* `strokeWeight: (ctx, weight)`
* `line: (ctx, v, v2)`
* `ellipse: (ctx, v, rx, ry = rx, oa = 0, sa = 0, ea = Math.PI * 2)`
* `arc: (ctx, v, r, sa = 0, ea = Math.PI * 2)`
* `drawPoly: (ctx, ps)`
* `rect: (ctx, pos, w, h)`

## Patterns

Supplying the ctx argument can lead to noise. For a more pleasant usage, it's recomended to partially apply the ctx argument to all the functions:

```
const applyArgs = (obj, ...args) => {
  return Object.keys(obj).reduce((newObj, key) => {
    newObj[key] = (...nextArgs) => obj[key](...args, ...nextArgs);
    return newObj;
  });
};

const ctx = /* get the canvas context */
const {
  line,
  fill,
  strokeWeight
} = applyArgs(microcan, ctx);

line([0, 0], [100, 100]);
```