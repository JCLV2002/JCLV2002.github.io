var contadorPaso = 0;
var turno = true;
var i = 0;
var j = 0;
/*True es para las blancas y false para las negras*/

function iniciar() {
  var celdas = document.getElementById("Tablero");
  celdas.rows[2].cells[1].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[2].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[3].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[4].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[5].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[6].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[7].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[8].style =
    "background-image: url(./img/PeonN.png); background-size:cover;";

  celdas.rows[7].cells[1].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[2].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[3].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[4].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[5].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[6].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[7].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[8].style =
    "background-image: url(./img/PeonB.png); background-size:cover;";

  celdas.rows[8].cells[3].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[3].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";
  celdas.rows[8].cells[6].style =
    "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[6].style =
    "background-image: url(./img/AlfilN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[8].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[8].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[1].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[1].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[8].style =
    "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[8].style =
    "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";
  celdas.rows[8].cells[7].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[7].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[2].style =
    "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style =
    "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[4].style =
    "background-image: url(./img/ReyB.png); background-size:cover;";
  celdas.rows[1].cells[4].style =
    "background-image: url(./img/ReyN.png); background-size:cover;";

  celdas.rows[8].cells[5].style =
    "background-image: url(./img/ReinaB.png); background-size:cover;";
  celdas.rows[1].cells[5].style =
    "background-image: url(./img/ReinaN.png); background-size:cover;";
}

function partidas() {
  var textarea = document.getElementById("texto");
  var valor = document.getElementById("Combo").value;

  switch (valor) {
    case "0":
      textarea.value = "";
      break;
    case "1":
      textarea.value = "Partida 1";
      break;
    case "2":
      textarea.value = "Partida 2";
      break;
    case "3":
      textarea.value = "Partida 3";
      break;
    default:
      break;
  }
}

function cargarPartida() {
  var archivo = document.getElementById("cargarBoton").files[0];
  var scanner = new FileReader();

  scanner.onload = function (e) {
    document.getElementById("texto").value = e.target.result;
    /*document.getElementById("texto").value = document.getElementById("cargarBoton").files;*/
  };
  scanner.readAsText(archivo);
}

async function pasoApaso() {
  var celdas = document.getElementById("texto").value;
  var tabla = document.getElementById("Tablero");
  var lineas = celdas.split("\n");
  //for (let i = 0; i < lineas.length; i++) {
  alert(lineas[i]);
  var tokens = lineas[i].split(" ");
  //for (let j = 1; j < tokens.length; j++) {
  //alert(tokens[j]);
  //alert(tieneMayusculas(tokens[j]));
  j = 1;
  if (!tieneMayusculas(tokens[i])) {
    //alert("Si soy un Peon y me moví a "+tokens[j]);
    var posicion = tokens[j].split(/(\d+)/);
    //El usar alert no se recomienda porque no puedes hacer nada en la página, se recomienda usar el console.log
    console.log(
      "Columna " +
      convertirLetraNumero(posicion[0]) +
      " renglon " +
      posicion[1]
    );
    var columna = parseInt(convertirLetraNumero(posicion[0]));
    var renglon = parseInt(posicion[1]);
    if (turno) {
      tabla.rows[renglon + 1].cells[columna + 1].style =

        "background-image: url(./img/PeonB.png); background-size:cover;";
    } else {
      tabla.rows[renglon + 1].cells[columna + 1].style =

        "background-image: url(./img/PeonN.png); background-size:cover;";

    }

    //moviento del caballo
    if (tokens[j].charAt(0) === "C") {
      // Si el movimiento es de un caballo
      var posicionInicial = tokens[j].charAt(1) + tokens[j].charAt(2);
      var filaDestino = parseInt(tokens[j].charAt(3));
      var columnaDestino = convertirLetraNumero(tokens[j].charAt(4));

      // Realizar el movimiento del caballo
      var exito = moverCaballo(posicionInicial, filaDestino, columnaDestino, turno);

      if (exito) {
        // Si el movimiento fue exitoso, cambiar el turno
        turno = !turno;
        document.getElementById("turno").innerHTML = "Turno de las " + (turno ? "blancas" : "negras");
      } else {
        // Si el movimiento no fue válido, mostrar un mensaje de error
        alert("Movimiento inválido para el caballo.");
      }

      await new Promise((resolve) => setTimeout(resolve, 3000)); // Esperar 3 segundos antes de continuar
    }
    //movimiento del alfil
    if (tokens[j].charAt(0) === "A") {
      // Si el movimiento es de un alfil
      var posicionInicial = tokens[j].charAt(1) + tokens[j].charAt(2);
      var filaDestino = parseInt(tokens[j].charAt(3));
      var columnaDestino = convertirLetraNumero(tokens[j].charAt(4));

      var exito = moverAlfil(posicionInicial, filaDestino, columnaDestino, turno);

      if (exito) {
        turno = !turno;
        document.getElementById("turno").innerHTML = "Turno de las " + (turno ? "blancas" : "negras");
      } else {
        alert("Movimiento inválido para el alfil.");
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
    //movimiento de la torre
    if (tokens[j].charAt(0) === "T") {
      // Si el movimiento es de una torre
      var posicionInicial = tokens[j].charAt(1) + tokens[j].charAt(2);
      var filaDestino = parseInt(tokens[j].charAt(3));
      var columnaDestino = convertirLetraNumero(tokens[j].charAt(4));

      var exito = moverTorre(posicionInicial, filaDestino, columnaDestino, turno);

      if (exito) {
        turno = !turno;
        document.getElementById("turno").innerHTML = "Turno de las " + (turno ? "blancas" : "negras");
      } else {
        alert("Movimiento inválido para la torre.");
      }

      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

  }
//movimiento de la reina
if (tokens[j].charAt(0) === "R") {
  // Si el movimiento es de una reina
  var posicionInicial = tokens[j].charAt(1) + tokens[j].charAt(2);
  var filaDestino = parseInt(tokens[j].charAt(3));
  var columnaDestino = convertirLetraNumero(tokens[j].charAt(4));

  var exito = moverReina(posicionInicial, filaDestino, columnaDestino, turno);

  if (exito) {
    turno = !turno;
    document.getElementById("turno").innerHTML = "Turno de las " + (turno ? "blancas" : "negras");
  } else {
    alert("Movimiento inválido para la reina.");
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));
}
//movimiento del rey
else if (tokens[j].charAt(0) === "K") {
  // Si el movimiento es del rey
  var posicionInicial = tokens[j].charAt(1) + tokens[j].charAt(2);
  var filaDestino = parseInt(tokens[j].charAt(3));
  var columnaDestino = convertirLetraNumero(tokens[j].charAt(4));

  var exito = moverRey(posicionInicial, filaDestino, columnaDestino, turno);

  if (exito) {
    turno = !turno;
    document.getElementById("turno").innerHTML = "Turno de las " + (turno ? "blancas" : "negras");
  } else {
    alert("Movimiento inválido para el rey.");
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));
}
  turno = !turno;
  document.getElementById("turno").innerHTML = "Turno de las " + (turno ? "blancas " : "negras ") + renglon + " " + columna;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //}
  //}
  i++;

}
//Movimiento del caballo
function moverCaballo(posicionInicial, filaDestino, columnaDestino, esBlanco) {
  var tabla = document.getElementById("Tablero");
  var renglonInicial = parseInt(posicionInicial.charAt(1));
  var columnaInicial = convertirLetraNumero(posicionInicial.charAt(0));

  // Verificar si el movimiento es válido para un caballo
  var movimientosValidos = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2]
  ];

  for (var i = 0; i < movimientosValidos.length; i++) {
    var nuevoRenglon = renglonInicial + movimientosValidos[i][0];
    var nuevaColumna = columnaInicial + movimientosValidos[i][1];

    if (
      nuevoRenglon === filaDestino &&
      nuevaColumna === columnaDestino &&
      nuevoRenglon >= 1 &&
      nuevoRenglon <= 8 &&
      nuevaColumna >= 0 &&
      nuevaColumna <= 7
    ) {
      // Si el movimiento es válido, actualiza el tablero
      if (esBlanco) {
        tabla.rows[filaDestino].cells[columnaDestino].style =
          "background-image: url(./img/CaballoB.png); background-size:cover;";
      } else {
        tabla.rows[filaDestino].cells[columnaDestino].style =
          "background-image: url(./img/CaballoN.png); background-size:cover;";
      }
      return true; // El movimiento fue exitoso
    }
  }
  return false; // El movimiento no fue válido
}

//moviendo del arfil
function moverAlfil(posicionInicial, filaDestino, columnaDestino, esBlanco) {
  var tabla = document.getElementById("Tablero");
  var renglonInicial = parseInt(posicionInicial.charAt(1));
  var columnaInicial = convertirLetraNumero(posicionInicial.charAt(0));

  // Verificar si el movimiento es válido para un alfil (movimientos diagonales)
  var movimientosValidos = [
    [-1, -1], // Diagonal superior izquierda
    [-1, 1],  // Diagonal superior derecha
    [1, -1],  // Diagonal inferior izquierda
    [1, 1]    // Diagonal inferior derecha
  ];

  for (var i = 0; i < movimientosValidos.length; i++) {
    var pasoFila = movimientosValidos[i][0];
    var pasoColumna = movimientosValidos[i][1];
    var nuevaFila = renglonInicial + pasoFila;
    var nuevaColumna = columnaInicial + pasoColumna;

    // Continuar moviéndose en la misma diagonal hasta llegar al destino o salir del tablero
    while (nuevaFila >= 1 && nuevaFila <= 8 && nuevaColumna >= 0 && nuevaColumna <= 7) {
      if (nuevaFila === filaDestino && nuevaColumna === columnaDestino) {
        // Si la posición actual coincide con la posición de destino, realizar el movimiento
        if (esBlanco) {
          tabla.rows[filaDestino].cells[columnaDestino].style =
            "background-image: url(./img/AlfilB.png); background-size:cover;";
        } else {
          tabla.rows[filaDestino].cells[columnaDestino].style =
            "background-image: url(./img/AlfilN.png); background-size:cover;";
        }
        return true; // El movimiento fue exitoso
      }
      // Avanzar al siguiente paso en la misma diagonal
      nuevaFila += pasoFila;
      nuevaColumna += pasoColumna;
    }
  }
  return false; // El movimiento no fue válido
}

//funcion de la torre
function moverTorre(posicionInicial, filaDestino, columnaDestino, esBlanco) {
  var tabla = document.getElementById("Tablero");
  var renglonInicial = parseInt(posicionInicial.charAt(1));
  var columnaInicial = convertirLetraNumero(posicionInicial.charAt(0));

  // Verificar si el movimiento es válido para una torre (movimientos verticales u horizontales)
  if (renglonInicial === filaDestino || columnaInicial === columnaDestino) {
    // Si el movimiento es vertical u horizontal, y no se sale del tablero
    if ((renglonInicial === filaDestino && columnaInicial !== columnaDestino) ||
        (renglonInicial !== filaDestino && columnaInicial === columnaDestino)) {
      // Verificar que no haya ninguna pieza en el camino
      if (renglonInicial === filaDestino) { // Movimiento horizontal
        var paso = (columnaDestino - columnaInicial) / Math.abs(columnaDestino - columnaInicial);
        for (var i = columnaInicial + paso; i !== columnaDestino; i += paso) {
          if (tabla.rows[filaDestino].cells[i + 1].style.backgroundImage !== "") {
            return false; // Hay una pieza en el camino, el movimiento no es válido
          }
        }
      } else { // Movimiento vertical
        var paso = (filaDestino - renglonInicial) / Math.abs(filaDestino - renglonInicial);
        for (var i = renglonInicial + paso; i !== filaDestino; i += paso) {
          if (tabla.rows[i + 1].cells[columnaDestino + 1].style.backgroundImage !== "") {
            return false; // Hay una pieza en el camino, el movimiento no es válido
          }
        }
      }

      // Si no hay piezas en el camino, realizar el movimiento
      if (esBlanco) {
        tabla.rows[filaDestino].cells[columnaDestino].style =
          "background-image: url(./img/TorreB.png); background-size:cover;";
      } else {
        tabla.rows[filaDestino].cells[columnaDestino].style =
          "background-image: url(./img/TorreN.png); background-size:cover;";
      }
      return true; // El movimiento fue exitoso
    }
  }
  return false; // El movimiento no fue válido para una torre
}
// moviendo de la reina
function moverReina(posicionInicial, filaDestino, columnaDestino, esBlanco) {
  var tabla = document.getElementById("Tablero");
  var renglonInicial = parseInt(posicionInicial.charAt(1));
  var columnaInicial = convertirLetraNumero(posicionInicial.charAt(0));

  // Verificar si el movimiento es válido para una reina (movimientos de torre o alfil)
  if (renglonInicial === filaDestino || columnaInicial === columnaDestino ||
      Math.abs(renglonInicial - filaDestino) === Math.abs(columnaInicial - columnaDestino)) {
    // Si el movimiento es vertical, horizontal o diagonal, y no se sale del tablero
    if ((renglonInicial === filaDestino && columnaInicial !== columnaDestino) ||
        (renglonInicial !== filaDestino && columnaInicial === columnaDestino) ||
        Math.abs(renglonInicial - filaDestino) === Math.abs(columnaInicial - columnaDestino)) {
      // Verificar que no haya ninguna pieza en el camino
      if (renglonInicial === filaDestino) { // Movimiento horizontal
        var paso = (columnaDestino - columnaInicial) / Math.abs(columnaDestino - columnaInicial);
        for (var i = columnaInicial + paso; i !== columnaDestino; i += paso) {
          if (tabla.rows[filaDestino].cells[i + 1].style.backgroundImage !== "") {
            return false; // Hay una pieza en el camino, el movimiento no es válido
          }
        }
      } else if (columnaInicial === columnaDestino) { // Movimiento vertical
        var paso = (filaDestino - renglonInicial) / Math.abs(filaDestino - renglonInicial);
        for (var i = renglonInicial + paso; i !== filaDestino; i += paso) {
          if (tabla.rows[i + 1].cells[columnaDestino + 1].style.backgroundImage !== "") {
            return false; // Hay una pieza en el camino, el movimiento no es válido
          }
        }
      } else { // Movimiento diagonal
        var pasoFila = (filaDestino - renglonInicial) / Math.abs(filaDestino - renglonInicial);
        var pasoColumna = (columnaDestino - columnaInicial) / Math.abs(columnaDestino - columnaInicial);
        var fila = renglonInicial + pasoFila;
        var columna = columnaInicial + pasoColumna;
        while (fila !== filaDestino && columna !== columnaDestino) {
          if (tabla.rows[fila + 1].cells[columna + 1].style.backgroundImage !== "") {
            return false; // Hay una pieza en el camino, el movimiento no es válido
          }
          fila += pasoFila;
          columna += pasoColumna;
        }
      }

      // Si no hay piezas en el camino, realizar el movimiento
      if (esBlanco) {
        tabla.rows[filaDestino].cells[columnaDestino].style =
          "background-image: url(./img/ReinaB.png); background-size:cover;";
      } else {
        tabla.rows[filaDestino].cells[columnaDestino].style =
          "background-image: url(./img/ReinaN.png); background-size:cover;";
      }
      return true; // El movimiento fue exitoso
    }
  }
  return false; // El movimiento no fue válido para una reina
}

//movimiento de la reina
function moverRey(posicionInicial, filaDestino, columnaDestino, esBlanco) {
  var tabla = document.getElementById("Tablero");
  var renglonInicial = parseInt(posicionInicial.charAt(1));
  var columnaInicial = convertirLetraNumero(posicionInicial.charAt(0));

  // Verificar si el movimiento es válido para un rey (una casilla en cualquier dirección)
  if (Math.abs(renglonInicial - filaDestino) <= 1 && Math.abs(columnaInicial - columnaDestino) <= 1) {
    // Verificar que la casilla destino no esté ocupada por una pieza del mismo color
    if (tabla.rows[filaDestino + 1].cells[columnaDestino + 1].style.backgroundImage === "") {
      // Realizar el movimiento del rey
      if (esBlanco) {
        tabla.rows[filaDestino + 1].cells[columnaDestino + 1].style =
          "background-image: url(./img/ReyB.png); background-size:cover;";
      } else {
        tabla.rows[filaDestino + 1].cells[columnaDestino + 1].style =
          "background-image: url(./img/ReyN.png); background-size:cover;";
      }
      return true; // El movimiento fue exitoso
    }
  }
  return false; // El movimiento no fue válido para un rey
}

//funcion completo
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.button2');

  button.addEventListener('click', async function() {
      // Llama a la función pasoApaso 100 veces
      for (let i = 0; i < 50; i++) {
          await pasoApaso();
      }
      if (i === 50){
        alert("Fin de la partida");
      }
  });
});

function tieneMayusculas(cadena) {
  return /[A-Z]/.test(cadena);
}
function convertirLetraNumero(letra) {
  switch (letra) {
    case "a":
      return 0;
      break;

    case "b":
      return 1;
      break;

    case "c":
      return 2;
      break;

    case "d":
      return 3;
      break;

    case "e":
      return 4;
      break;

    case "f":
      return 5;
      break;

    case "g":
      return 6;
      break;

    case "h":
      return 7;
      break;
  }
}

async function test() {
  var salida = "";
  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    salida += i + "<br>";
    document.getElementById("out").innerHTML = salida;
  }
}

function mostrarAlerta() {
  alert("Aun no esta terminado el juego, tengo problemas con la logica, aun lo sigo trabajando. UNA DISCULPA.");
}