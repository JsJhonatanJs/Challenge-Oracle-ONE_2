let canvas = document.querySelector("#canvas");
let lienzo = canvas.getContext("2d");

function pizarra(palabra, x, x1, x2, hP, hL, hL2) {
  lienzo.font = "bold 50px verdana";
  lienzo.textAling = "start";
  lienzo.textBaseline = "buttom";
  lienzo.fillText(palabra, x, hP);
  lienzo.moveTo(x1, hL);
  lienzo.lineTo(x2, hL2);
  lienzo.lineWidth = 10;
  lienzo.lineCap = "round";
  lienzo.stroke();
}

function ahorcado(xi, xf, yi, yf) {
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.lineWidth = 10;
  lienzo.lineCap = "round";
  lienzo.stroke();
}

function ahorcadoC(cX, cY, r) {
  lienzo.beginPath();
  lienzo.arc(cX, cY, r, 0, 2 * 3.14);
  lienzo.stroke();
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
