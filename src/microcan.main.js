const poly = (x, y, sides, r) => {
  const points = [];
  for (let i = 0; i < sides; i++) {
    const X = x + Math.cos((Math.PI*2) / sides * i) * (r);
    const Y = y + Math.sin((Math.PI*2) / sides * i) * (r);
    points.push([X,Y]); 
  }
  return points;
};

const setCanvasSize = (id, w, h) => {
  const c = document.getElementById(id);
  c.setAttribute('width', w)
  c.setAttribute('height', h);
};

const fill = (ctx, r = 0, g = 0, b = 0, a = 255) => {
  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
}

const noFill = (ctx) => {
  fill(ctx, 0, 0, 0, 0);
}

const background = (ctx, r = 0, g = 0, b = 0, a = 255, w = 500, h = 500) => {
  fill(ctx, r, g, b, a);
  ctx.fillRect(0, 0, w, h);
}

const stroke =  (ctx, r = 0, g = 0, b = 0, a = 255) => {
  ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
};

const noStroke = (ctx) => {
  stroke(ctx, 0, 0, 0, 0);
}

const strokeWeight = (ctx, weight) => {
  ctx.lineWidth = weight;
}

const line = (ctx, v, v2) => {
  ctx.beginPath();
  ctx.moveTo(...v);
  ctx.lineTo(...v2);
  ctx.stroke();
  ctx.closePath();
}

const ellipse = (ctx, v, r) => {
  ctx.beginPath();
  ctx.arc(...v, r, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

const drawPoly = (ctx, ps) => {
  ctx.beginPath();
  ctx.moveTo(...ps[0]);
  for (let i = 1; i < ps.length; i++) {
    ctx.lineTo(...ps[i]);
  }
  ctx.lineTo(...ps[0]);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

const rect = (ctx, pos, w, h) => {
  ctx.rect(...pos, w, h);
};

/* start window exports */
/**
 * Polutes the global scope with unnamespaced functions
 */
const polute = function () {
  window.setCanvasSize = setCanvasSize;
  window.background = background;
  window.stroke = stroke;
  window.poly = poly;
  window.fill = fill;
  window.noFill = noFill;
  window.noStroke = noStroke;
  window.strokeWeight = strokeWeight;
  window.line = line;
  window.ellipse = ellipse;
  window.drawPoly = drawPoly;
}

/**
 * Exposed API
 */
window.microcan = {
  polute,
  setCanvasSize,
  background,
  stroke,
  poly,
  fill,
  noFill,
  noStroke,
  strokeWeight,
  line,
  ellipse,
  drawPoly
};
/* end window exports */

/* start exports */
export { setCanvasSize as setCanvasSize};
export { background as background};
export { stroke as stroke};
export { poly as poly};
export { fill as fill};
export { noFill as noFill};
export { noStroke as noStroke};
export { strokeWeight as strokeWeight};
export { line as line};
export { ellipse as ellipse};
export { drawPoly as drawPoly};
/* end exports */
