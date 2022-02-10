function numeroAleratorio() {
  let number = arreglo.length - 1;
  let numero = Math.round(Math.random() * number);

  palabras = arreglo[numero];
  separador = space().split("");
  espacio();
}

function espacio() {
  let letras = separador;
  let a = 240;
  let b = 240;
  let c = 280;

  for (let i = 0; i < palabras.length; i++) {
    pizarra(letras[i], a, b, c, 470, 490, 490);
    a = a + 60;
    b = b + 60;
    c = c + 60;
  }

  input_1.style.display = "block";
  divH_1.style.display = "block";
  divH.style.display = "none";
  input_1.focus();
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

  let comprobar = input_1.value.search(/^[A-z\u00f1\u00d1\s]+$/);
  let letraBuscarE = arregloError.includes(letras_1.toUpperCase());
  let letraE = palabras.search(letras_1);

  if (comprobar === 0) {
    if (letraBuscarE === false) {
      if (letraE === -1) {
        arregloError.push(letras_1.toUpperCase());
        errorLetras();
      }
    }
  }

  espacio();
  Parrafo_1();
  Parrafo_2();
  dibujoAhorcado();
  input_1.value = "";
}

function errorLetras() {
  let x = 500;
  for (let i = 0; i < arregloError.length; i++) {
    pizarraError(arregloError[i], x, 250);
    x = x + 60;
  }
}

function Parrafo_1() {
  let cloud = separador.join("");
  cloud = cloud.toLowerCase();

  if (cloud === palabras) {
    parrafo_1.innerHTML = "Ganaste";
    input_1.style.display = "none";
  } else {
    parrafo_1.innerHTML = "";
  }
}

function Parrafo_2() {
  if (arregloError.length === 10) {
    parrafo_2.innerHTML = "Perdiste";
    input_1.style.display = "none";
  } else {
    parrafo_2.innerHTML = "";
  }
}

function divH_1_Click() {
  input_1.focus();
}

function agregarPalabra() {
  let comprobar = input.value.search(/^[A-z\u00f1\u00d1\s]+$/);
  let repetido = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (input.value.toLowerCase() === arreglo[i]) {
      repetido = 1;
    }
  }

  if (repetido === 0) {
    if (comprobar === 0) {
      arreglo.push(input.value.toLowerCase());
      input.value = "";
    } else {
      parrafoE_Esconder = parrafoE.style.display = "none";
      parrafoEsconder = parrafo.style.display = "block";
      setTimeout(function () {
        parrafoEsconder = parrafo.style.display = "none";
      }, 3000);
    }
  } else {
    parrafoEsconder = parrafo.style.display = "none";
    parrafoE_Esconder = parrafoE.style.display = "block";
    setTimeout(function () {
      parrafoE_Esconder = parrafoE.style.display = "none";
    }, 2000);
  }
}

function agregandoPalabras() {
  divA.style.display = "block";
  input_1.style.display = "none";
  boton_3.style.display = "none";
  input_A.focus();
  boton_2.disabled = true;
  boton_3.disabled = true;
}

function añadirPalabra() {
  let comprobarA = input_A.value.search(/^[A-z\u00f1\u00d1\s]+$/);
  let repetidoA = 0;

  for (let i = 0; i < arreglo.length; i++) {
    if (input_A.value.toLowerCase() === arreglo[i]) {
      repetidoA = 1;
    }
  }

  if (repetidoA === 0) {
    if (comprobarA === 0) {
      arreglo.push(input_A.value.toLowerCase());
      input_A.value = "";
    } else {
      parrafoAE_Esconder = parrafoAE.style.display = "none";
      parrafoAEsconder = parrafoA.style.display = "block";
      setTimeout(function () {
        parrafoAEsconder = parrafoA.style.display = "none";
      }, 3000);
    }
  } else {
    parrafoAEsconder = parrafoA.style.display = "none";
    parrafoAE_Esconder = parrafoAE.style.display = "block";
    setTimeout(function () {
      parrafoAE_Esconder = parrafoAE.style.display = "none";
    }, 2000);
  }
}

function regresarAlJuego() {
  divA.style.display = "none";
  input_1.style.display = "block";
  boton_3.style.display = "inline";
  input_1.focus();
  boton_2.disabled = false;
  boton_3.disabled = false;
}

let input = document.querySelector("#input");
let input_1 = document.querySelector("#input_1");
let input_A = document.querySelector("#input_A");

let boton = document.querySelector("#boton");
let boton_1 = document.querySelector("#boton_1");
let boton_2 = document.querySelector("#boton_2");
let boton_3 = document.querySelector("#boton_3");
let boton_4 = document.querySelector("#boton_4");
let boton_5 = document.querySelector("#boton_5");

let parrafo = document.querySelector("#parrafo");
let parrafoE = document.querySelector("#parrafoE");
let parrafoA = document.querySelector("#parrafoA");
let parrafoAE = document.querySelector("#parrafoAE");
let parrafo_1 = document.querySelector("#parrafo_1");
let parrafo_2 = document.querySelector("#parrafo_2");

let divH = document.querySelector("#divH");
let divH_1 = document.querySelector("#divH_1");
let divA = document.querySelector("#divA");

let arreglo = ["jhonatan", "alura", "challenge", "oracle"];
let arregloError = [];
let palabras = "";
let separador = space().split("");

let parrafoEsconder = (parrafo.style.display = "none");
let parrafoE_Esconder = (parrafoE.style.display = "none");
let parrafoAEsconder = (parrafoA.style.display = "none");
let parrafoAE_Esconder = (parrafoAE.style.display = "none");

boton.onclick = numeroAleratorio;
boton_1.onclick = agregarPalabra;
boton_3.onclick = agregandoPalabras;
boton_4.onclick = añadirPalabra;
boton_5.onclick = regresarAlJuego;

divH_1.style.display = "none";
input_1.style.display = "none";
divA.style.display = "none";
