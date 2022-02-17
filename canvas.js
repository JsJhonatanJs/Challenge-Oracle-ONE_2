//funcion para pintar letras y crear guiones
function pintardorDeLetrasGuiones(letra, x, y, xM, yM, xL, yL) {
  //letras verdes
  pincel.font = "bold 50px verdana";
  pincel.textAling = "start";
  pincel.textBaseline = "buttom";
  pincel.fillStyle = "green";
  pincel.fillText(letra, x, y);

  //guiones azules
  pincel.beginPath();
  pincel.strokeStyle = "blue";
  pincel.moveTo(xM, yM);
  pincel.lineTo(xL, yL);
  pincel.lineWidth = 10;
  pincel.lineCap = "round";
  pincel.stroke();
}

//funcion para pintar letras erroneas
function pintadorDeLetrasErroneas(letra, x, y) {
  //letras rojas
  pincel.font = "bold 50px verdana";
  pincel.textAling = "start";
  pincel.textBaseline = "buttom";
  pincel.fillStyle = "red";
  pincel.fillText(letra, x, y);
}

//funcion que crea las lineas segun las coordenadas
function ahorcado(xM, yM, xL, yL, color) {
  //dibujado de lineas
  pincel.beginPath();
  pincel.strokeStyle = color;
  pincel.moveTo(xM, yM);
  pincel.lineTo(xL, yL);
  pincel.lineWidth = 10;
  pincel.lineCap = "round";
  pincel.stroke();
}

//funcion para dibujar circulos
function ahorcadoCirculo(x, y, r, colorCirculo) {
  //dibujado de circulo
  pincel.beginPath();
  pincel.strokeStyle = colorCirculo;
  pincel.arc(x, y, r, 0, 2 * Math.PI);
  pincel.lineWidth = 10;
  pincel.stroke();
}

//funcion para dibujar el triangulo
function triangulo() {
  ahorcado(10, 490, 200, 490, "brown");
  ahorcado(10, 490, 100, 450, "brown");
  ahorcado(200, 490, 100, 450, "brown");
}

//funcion que comprueba si letrasErroneas tiene letras equivocadas si letras erroneas tiene 1 entonces se va dibujar la primera parte del ahocado y si tiene 2 la siguiente parte asi sucesivamente
function dibujoAhorcado() {
  if (letrasErroneas.length === 1) {
    ahorcado(100, 450, 100, 10, "brown");
  }

  if (letrasErroneas.length === 2) {
    ahorcado(100, 10, 400, 10, "brown");
  }

  if (letrasErroneas.length === 3) {
    ahorcado(400, 10, 400, 80, "brown");
  }

  if (letrasErroneas.length === 4) {
    ahorcadoCirculo(400, 120, 40, "black");
  }

  if (letrasErroneas.length === 5) {
    ahorcado(400, 160, 400, 350, "black");
  }

  if (letrasErroneas.length === 6) {
    ahorcado(400, 250, 310, 182, "black");
  }

  if (letrasErroneas.length === 7) {
    ahorcado(400, 250, 490, 180, "black");
  }

  if (letrasErroneas.length === 8) {
    ahorcado(400, 350, 310, 420, "black");
  }

  if (letrasErroneas.length === 9) {
    ahorcado(400, 350, 490, 420, "black");
  }

  if (letrasErroneas.length === 10) {
    ahorcado(380, 110, 390, 100, "black");
    ahorcado(380, 100, 390, 110, "black");
    ahorcado(410, 110, 420, 100, "black");
    ahorcado(410, 100, 420, 110, "black");
    ahorcado(410, 140, 390, 140, "black");
  }
}

let canvas = document.querySelector("canvas");
let pincel = canvas.getContext("2d");
