let canvas_1 = document.querySelector("#canvas_1");
let lienzo_1 = canvas_1.getContext("2d");

function ahorcado(xi, xf, yi, yf) {
  lienzo_1.moveTo(xi, yi);
  lienzo_1.lineTo(xf, yf);
  lienzo_1.lineWidth = 10;
  lienzo_1.lineCap = "round";
  lienzo_1.stroke();
}

function ahorcadoC(cX, cY, r) {
  lienzo_1.beginPath();
  lienzo_1.arc(cX, cY, r, 0, 2 * 3.14);
  lienzo_1.stroke();
}

ahorcado(10, 200, 490, 490);
ahorcado(10, 100, 490, 450);
ahorcado(200, 100, 490, 450);
ahorcado(100, 100, 450, 10);
ahorcado(100, 400, 10, 10);
ahorcado(400, 400, 10, 80);
ahorcadoC(400, 120, 40);
ahorcado(400, 400, 160, 350);
ahorcado(400, 310, 250, 182);
ahorcado(400, 490, 250, 180);
ahorcado(400, 310, 350, 420);
ahorcado(400, 490, 350, 420);
