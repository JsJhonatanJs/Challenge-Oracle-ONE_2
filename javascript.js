function espacio() {
  let letras = separador;
  let a = 1;
  let b = 0;
  let c = 44;
  for (let i = 0; i < palabras.length; i++) {
    pizarra(letras[i], 60 * i, b, c, 50, 66, 66);
    b = b + 60;
    c = c + 60;
    a++;
  }
  input_1.style.display = "block";
  divH_1.style.display = "block";
  divH.style.display = "none";
}

function space() {
  let espacios = " ";
  for (let i = 1; i < palabras.length; i++) {
    espacios = espacios + " ";
  }
  return espacios;
}

function texto() {
  let letras_1 = input_1.value.toLowerCase();
  for (let i = 0; i < palabras.length; i++) {
    if (letras_1 === palabras[i]) {
      separador[i] = letras_1.toUpperCase();
    }
  }
  espacio();
  parrafo_1();
  input_1.value = "";
}

function parrafo_1() {
  let cloud = separador.join("");
  cloud = cloud.toLowerCase();
  if (cloud === palabras) {
    parrafo.innerHTML = "Ganaste";
  }
}

function pizarra(palabra, x, x1, x2, hP, hL, hL2) {
  lienzo.font = "bold 50px verdana";
  lienzo.textAling = "start";
  lienzo.textBaseline = "buttom";
  lienzo.fillText(palabra, x, hP);
  lienzo.moveTo(x1, hL);
  lienzo.lineTo(x2, hL2);
  lienzo.lineWidth = 10;
  lienzo.stroke();
}

function divH_1_Click() {
  input_1.focus();
}

let input = document.querySelector("#input");
let input_1 = document.querySelector("#input_1");
let boton = document.querySelector("#boton");
let boton_1 = document.querySelector("#boton_");
let parrafo = document.querySelector("#parrafo");
let divH = document.querySelector("#divH");
let divH_1 = document.querySelector("#divH_1");
let canvas = document.getElementById("canvas");
let lienzo = canvas.getContext("2d");

let arreglo = ["jhonatan", "alura", "challenge", "oracle"];
let number = arreglo.length - 1;
let numero = Math.round(Math.random() * number);
let palabras = arreglo[numero];
console.log(palabras);
var separador = space().split("");
boton.onclick = espacio;
divH_1.style.display = "none";
input_1.style.display = "none";
