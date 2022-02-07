function pizarra(palabra, x, x1, x2, hP, hL, hL2) {
  lienzo.font = "bold 50px verdana";
  lienzo.textAling = "start";
  lienzo.textBaseline = "buttom";
  lienzo.fillStyle = "green";
  lienzo.fillText(palabra, x, hP);

  lienzo.beginPath();
  lienzo.strokeStyle = "blue";
  lienzo.moveTo(x1, hL);
  lienzo.lineTo(x2, hL2);
  lienzo.lineWidth = 10;
  lienzo.lineCap = "round";
  lienzo.stroke();
}

function pizarraError(palabra, x, y) {
  lienzo.font = "bold 50px verdana";
  lienzo.textAling = "start";
  lienzo.textBaseline = "buttom";
  lienzo.fillStyle = "red";
  lienzo.fillText(palabra, x, y);
}

function ahorcado(xi, xf, yi, yf, c) {
  lienzo.beginPath();
  lienzo.strokeStyle = c;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.lineWidth = 10;
  lienzo.lineCap = "round";
  lienzo.stroke();
}

function ahorcadoC(cX, cY, r, c) {
  lienzo.beginPath();
  lienzo.strokeStyle = c;
  lienzo.arc(cX, cY, r, 0, 2 * 3.14);
  lienzo.stroke();
}

let canvas = document.querySelector("#canvas");
let lienzo = canvas.getContext("2d");

ahorcado(10, 200, 490, 490, "brown");
ahorcado(10, 100, 490, 450, "brown");
ahorcado(200, 100, 490, 450, "brown");

ahorcado(100, 100, 450, 10, "brown");

ahorcado(100, 400, 10, 10, "brown");

ahorcado(400, 400, 10, 80, "brown");

ahorcadoC(400, 120, 40, "black");
ahorcado(380, 390, 110, 100, "black");
ahorcado(380, 390, 100, 110, "black");
ahorcado(410, 420, 110, 100, "black");
ahorcado(410, 420, 100, 110, "black");
ahorcado(410, 390, 140, 140, "black");

ahorcado(400, 400, 160, 350, "black");

ahorcado(400, 310, 250, 182, "black");
ahorcado(400, 490, 250, 180, "black");

ahorcado(400, 310, 350, 420, "black");
ahorcado(400, 490, 350, 420, "black");
