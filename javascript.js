function espacio() {
  let letras = separador;
  let a = 1;
  let b = 0;
  let c = 44;
  for (let i = 0; i < palabras.length; i++) {
    pizarra(letras[i], 60 * i, b, c);
    b = b + 60;
    c = c + 60;
    a++;
  }
}

function space() {
  let espacios = " ";
  for (let i = 1; i < palabras.length; i++) {
    espacios = espacios + " ";
  }
  return espacios;
}

function texto() {
  let letras_1 = input.value;

  for (let i = 0; i < palabras.length; i++) {
    if (letras_1 === palabras[i]) {
      separador[i] = letras_1;
    }
  }
  espacio();
  input.value = "";
}

function pizarra(palabra, x, x1, x2) {
  lienzo.font = "bold 50px verdana";
  lienzo.textAling = "start";
  lienzo.textBaseline = "buttom";
  lienzo.fillText(palabra, x, 50);
  lienzo.moveTo(x1, 66);
  lienzo.lineTo(x2, 66);
  lienzo.lineWidth = 10;
  lienzo.stroke();
}

let input = document.querySelector("#input");
let boton = document.querySelector("#boton");
let canvas = document.getElementById("canvas");
let lienzo = canvas.getContext("2d");
boton.onclick = espacio;
let palabras = "jhonatan";
var separador = space().split("");
