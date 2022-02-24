//funcion para dibujar los guiones y letras en el canvas
function dibujarLetrasGuiones() {
  //coordenadas de las letras
  let x = 240;
  let y = 470;

  //coordenadas de los guiones
  //mover linea
  let xM = 240;
  let yM = 490;
  //dibujar linea
  let xL = 280;
  let yL = 490;

  //ir pintando cada letra
  for (let i = 0; i < palabraDibujar.length; i++) {
    pintardorDeLetrasGuiones(palabraDibujar[i], x, y, xM, yM, xL, yL);

    //x 60 es el espacio que hay en cada letra y a xM y xL que son los guiones les sumo el mismo espaciado de la letra que es 60
    x = x + 60;
    xM = xM + 60;
    xL = xL + 60;
  }
  //borrador de input
  input.value = "";
}

//funcion que dibuja en el canvas las letras errones
function dibujarLetraErronea() {
  //es de donde empieza la primera letra a dibujarse
  let x = 500;
  //dibuja las letras erroneas que estan en el array de letrasErroneas
  for (let i = 0; i < letrasErroneas.length; i++) {
    pintadorDeLetrasErroneas(letrasErroneas[i], x, 250);
    //aumenta 60 cada letra  osea es como un espacio
    x = x + 60;
  }
}

//funcion para escoger una palabra aleatoria
function palabraAleatoria() {
  //le resta -1 al numero de palabras que haya en el array para poder tener cada indice del array desde el 0
  let numero = palabras.length - 1;

  //escoje un numero aleatorio del 0 al numero de palabras que haya
  let numeroAleatorio = Math.round(Math.random() * numero);

  //genera los espacios para que se dibujen los guiones segun las letras de la palabra escogida convertida en espacios y en un array
  palabraDibujar = palabras[numeroAleatorio].replace(/./g, " ").split("");

  //contiene la palabra escogida
  palabraEscogida = palabras[numeroAleatorio];
}

//funcion para adivinar la letra osea al momento de ingresar una letra y la letra es correcta que la dibuje en el lugar que la encontro
function adivinarLetra() {
  //  verifica si la letra ingresada coincide con la palabra escogida y si coincide la coloca en el index que la encontro
  for (let i = 0; i < palabraEscogida.length; i++) {
    if (input.value.toLowerCase() === palabraEscogida[i]) {
      palabraDibujar[i] = input.value.toUpperCase();
    }
  }

  //verifica si la letra ingresada es una letra del alfabeto y si es una letra del alfabeto retorna el numero 0 pero si es un numero o caracteres especiales marca -1
  if (input.value.search(/^[a-zA-Z\u00f1\u00d1\s]+$/) === 0) {
    //verifica si la letra ingresada ya esta en las letras errones y si la letra ya esta retorna true pero si la letra no esta retorna false
    if (letrasErroneas.includes(input.value.toUpperCase()) === false) {
      //verifica si la letra ingresada esta en la palabra escogida y si no esta hace un push al array que contendra todas las palabras erroneas
      if (palabraEscogida.search(input.value.toLowerCase()) === -1) {
        letrasErroneas.push(input.value.toUpperCase());
      }
    }
  }
}

//funcion para llamar a la funcion de generar palabras aleatorias y luego llamar a la funcion dibujar para que dibuje la palabra
function iniciarJuego() {
  //oculta el div que contiene el menu de inicio
  contenedorInicio.style.display = "none";
  //muestra el div que contiene el juego del ahorcado
  contenedorAhorcado.style.display = "grid";
  //muestra el input para que pueda escribir
  input.style.display = "block";
  //palabra aleatoria escogida
  palabraAleatoria();
  //dibuja los guiones despues de haber escogido la palabra
  dibujarLetrasGuiones();
  //dibuja el triangulo
  triangulo();
  //focus al input para que se pueda escribir
  input.focus();
}

//funcion que al momento que coloca una letra  en el input esta funcion se activa por el oninput en el html y llama a las funciones que contiene
function ingresarLetra() {
  //comprueba si la letra es correcta o erronea
  adivinarLetra();
  //dibuja las letras correctas por que los guiones ya se dibujaron al dar iniciar Juego
  dibujarLetrasGuiones();
  //dibuja las letras erroneas
  dibujarLetraErronea();
  //dibuja al ahorcado segun las veces que la letra no sea la correcta
  dibujoAhorcado();
  //verifica si el jugador gano o perdio
  verificarSiGanoPerdio();
}

//funcion para eliminar los mensajes de error
function EliminarMensajeDeError() {
  //elimina el tiempo por si alguno de los errores ya lo llamo se restablezca
  clearTimeout(tiempo);
  //vuelve a poner el tiempo despues de haberlo eliminado
  tiempo = setTimeout(() => {
    parrafoError.textContent = "";
    parrafoErrorAhorcado.textContent = "";
  }, 3000);
}

//funcion para agregar palabras en el menu de inicio
function agregarPalabrasInicio() {
  //variable que almacena un numero osea si la palabra fue encontrada en el for le cambiara el valor a 1 pero si no se queda en 0
  let repetido = 0;

  //busca entre todas las palabras que hay en el array de palabras si la palabra ingresada ya esta en el array de palabras y si ya esta cambiara el valor de repetido a 1 pero si no encuentra la palabra repetida el valor de repetido no cambiara
  for (let i = 0; i < palabras.length; i++) {
    if (input_1.value.toLowerCase() === palabras[i]) {
      repetido = 1;
    }
  }

  //comprueba si hay letras ingresadas y si no hay marca un error osea si hay 0 palabras marca un error
  if (input_1.value.length != 0) {
    //comprueba si la palabra ingresada tiene letras del alfabeto y si tiene numeros o caracteres especiales marca un error que seria -1
    if (input_1.value.search(/^[a-zA-Z\u00f1\u00d1\s]+$/) === 0) {
      //comprueba si la palabra ingresada ya esta en el array de palabras
      if (repetido === 0) {
        palabras.push(input_1.value.toLowerCase());
        input_1.value = "";
        input_1.focus();
      } else {
        parrafoError.textContent = '"' + input_1.value + '"' + " ya fue agregado";
        EliminarMensajeDeError();
        input_1.focus();
      }
    } else {
      parrafoError.textContent = "No puede agregar numeros o letras con acentos";
      EliminarMensajeDeError();
      input_1.focus();
    }
  } else {
    parrafoError.textContent = "Ingrese una palabra";
    EliminarMensajeDeError();
    input_1.focus();
  }
}

//funcion que verifica si el usuario gano o perdio
function verificarSiGanoPerdio() {
  //comprueba si la palabraDibujar es igual a la palabra escogida
  if (palabraEscogida === palabraDibujar.join("").toLowerCase()) {
    parrafoGanoPerdio.textContent = "Ganaste";
    parrafoGanoPerdio.style.color = "rgba(0, 128, 0, 0.63)";
    input.style.display = "none";
  } else {
    parrafoGanoPerdio.textContent = "";
    input.style.display = "inline";
  }

  //comprueba si las letras errones en el array llegan a 10 para insertar el texto de perdiste
  if (letrasErroneas.length === 10) {
    parrafoGanoPerdio.textContent = "Perdiste";
    parrafoGanoPerdio.style.color = "rgba(255, 0, 0, 0.397)";
    input.style.display = "none";
  } else {
    if (parrafoGanoPerdio.textContent != "Ganaste") {
      parrafoGanoPerdio.textContent = "";
      input.style.display = "inline";
    }
  }
}

function volverAJugar() {
  //limpia el canvas osea borra todo lo que se dibujo en el canvas
  pincel.clearRect(0, 0, 1100, 500);
  //elimina todas las letras erroeneas
  letrasErroneas = [];
  //dibuja el triangulo
  triangulo();
  //vuelve a escoger una palabra aleatoriamente
  palabraAleatoria();
  //vuelve a dibujar los guiones segun la nueva palabra escogida
  dibujarLetrasGuiones();
  //verifica si gano o perdio si gana o pierde el input se escondera "none" para que no pueda escribir pero al volver a darle a jugar y no encuentra ninguna palabra que gano o perdio vulve activar el input "inline"
  verificarSiGanoPerdio();
  //vuelve a dar focus al input para poder escribir
  input.focus();
}

// funcion que no deja que se pueda escribir mas de 10 letras e informa que alcanzo el maximo de letras
function maxLetras() {
  input_1.value = input_1.value.slice(0, 10);
  if (input_1.value.length === 10) {
    clearTimeout(tiempo);
    parrafoError.textContent = "Máximo de 10 letras";
  } else {
    parrafoError.textContent = "";
  }
}

//abre el menu de agregar palabras desde el juego del ahorcado
function abrirMenuAgregarPalabraAhorcado() {
  //oculta el boton de agregar palabras
  boton_3.style.display = "none";
  //muestra el menu de agregar palabras en el juego del ahorcado
  contenedorAhorcadoAgregarPalabra.style.display = "flex";
  //focus al input_2
  input_2.focus();
}

// funcion que no deja que se pueda escribir mas de 10 letras e informa que alcanzo el maximo de letras
function maxLetrasAhorcado() {
  input_2.value = input_2.value.slice(0, 10);
  if (input_2.value.length === 10) {
    parrafoErrorAhorcado.textContent = "Máximo de 10 letras";
    clearTimeout(tiempo);
  } else {
    parrafoErrorAhorcado.textContent = "";
  }
}

//funcion para agregar palabras desde el juego del ahorcado
function agregarPalabrasAhorcado() {
  //variable que almacena un numero osea si la palabra fue encontrada en el for le cambiara el valor a 1 pero si no se queda en 0
  let repetido = 0;

  //busca entre todas las palabras que hay en el array de palabras si la palabra ingresada ya esta en el array de palabras y si ya esta cambiara el valor de repetido a 1 pero si no encuentra la palabra repetida el valor de repetido no cambiara
  for (let i = 0; i < palabras.length; i++) {
    if (input_2.value.toLowerCase() === palabras[i]) {
      repetido = 1;
    }
  }

  //comprueba si hay letras ingresadas y si no hay marca un error osea si hay 0 palabras marca un error
  if (input_2.value.length != 0) {
    //comprueba si la palabra ingresada tiene letras del alfabeto y si tiene numeros o caracteres especiales marca un error que seria -1
    if (input_2.value.search(/^[a-zA-Z\u00f1\u00d1\s]+$/) === 0) {
      //comprueba si la palabra ingresada ya esta en el array de palabras
      if (repetido === 0) {
        palabras.push(input_2.value.toLowerCase());
        input_2.value = "";
        input_2.focus();
      } else {
        parrafoErrorAhorcado.textContent =
          '"' + input_2.value + '"' + " ya fue agregado";
        EliminarMensajeDeError();
        input_2.focus();
      }
    } else {
      parrafoErrorAhorcado.textContent =
        "No puede agregar numeros o letras con acentos";
      EliminarMensajeDeError();
      input_2.focus();
    }
  } else {
    parrafoErrorAhorcado.textContent = "Ingrese una palabra";
    EliminarMensajeDeError();
    input_2.focus();
  }
}

function volverAlJuego() {
  //oculta el menu de agregar palabras en el juego del ahorcado
  contenedorAhorcadoAgregarPalabra.style.display = "none";
  //muestra el boton de agregar palabras
  boton_3.style.display = "inline";
  //focus al input para escribir en el ahorcado
  input.focus();
}

/*
input = el que recibe las letras para escribir en el canvas
input_1 = input para escribir las palabras que van a ser agregadas
input_2 = input para escribir las palabras que van a ser agregadas desde el juego del ahorcado

boton = boton para iniciar el juego y escoger la palabra
boton_1 = boton para agregar nuevas palabras al array de palabras
boton_2 = boton para limpiar el canvas y volver a escoger la palabra
boton_3 = boton para mostar el menu de agregar palabras en el ahorcado
boton_4 = boton para agregar nuevas palabras al array de palabras desde el juego del ahorcado
boton_5 = boton para volver al juego

parrafoError = mostrara el error que pongas
parrafoErrorAhorcado = mostrara el error que pongas desde el juego del ahorcado
parrafoGanoPerdio = muestra el resultado en el canvas si gano o perdio

tituloInicio= es el titulo del menu de inicio
*/
let input = document.querySelector("#input");
let input_1 = document.querySelector("#input_1");
let input_2 = document.querySelector("#input_2");
let boton = document.querySelector("#boton");
let boton_1 = document.querySelector("#boton_1");
let boton_2 = document.querySelector("#boton_2");
let boton_3 = document.querySelector("#boton_3");
let boton_4 = document.querySelector("#boton_4");
let boton_5 = document.querySelector("#boton_5");
let parrafoError = document.querySelector("#parrafoError");
let parrafoErrorAhorcado = document.querySelector("#parrafoErrorAhorcado");
let parrafoGanoPerdio = document.querySelector("#Gano-Perdio");
let tituloInicio = document.querySelector("#tituloInicio");

/*
contenedorHijo = contiene todo el inicio como los 2 botones y el input
contendedorAhorcado= contiene todo el juego del ahorcado
contenedorAhorcadoAgregarPalabra = contiene el menu de agregar palabras
*/
let contendedorInicio = document.querySelector("#contendedorInicio");
let contendedorAhorcado = document.querySelector("#contendedorAhorcado");
let contenedorAhorcadoAgregarPalabra = document.querySelector(
  "#contenedorAhorcadoAgregarPalabra"
);

/*
palabras = array con todas las palabras
palabraEscogida = contiene la palabra escogida aleatoriamente
palabraDibujar = contiene los espacios que va dibur para cada guion y luego se reemplazaran por las letras que coincidan con la palabra escogida
letrasErroneas = almacena todas las letras que no coincidieron con la palabra escogida
*/
let palabras = [
  "jhonatan",
  "alura",
  "challenge",
  "oracle",
  "discord",
  "peru",
  "puerta",
  "albañil",
  "christian",
  "mauricio",
  "jeanmarie",
  "genesys",
  "raquel",
];
let palabraEscogida = "";
let palabraDibujar = "";
let letrasErroneas = [];

/*
tiempo = es el tiempo que demora en desaparecer el error del input 
*/
let tiempo = setTimeout(() => {
  parrafoError.textContent = "";
  parrafoErrorAhorcado.textContent = "";
}, 3000);

/*
boton.onclick = escoje una palabra al azar para empezar el juego y lo dibuja en el canvas
boton_1.onclick = agrega las palabras que quiera el usuario
boton_2.onclick= limpia el canvas escoge una nueva palabra y dibuja el traingulo 
boton_3.onclick = muestra el contenedorAhorcadoAgregarPalabra
boton_4.onclick = agrega nuevas palabras desde el juego del ahorcado
boton_5.onclick = oculta el menu de agregar palabras para volve al juego

*/
boton.onclick = iniciarJuego;
boton_1.onclick = agregarPalabrasInicio;
boton_2.onclick = volverAJugar;
boton_3.onclick = abrirMenuAgregarPalabraAhorcado;
boton_4.onclick = agregarPalabrasAhorcado;
boton_5.onclick = volverAlJuego;
