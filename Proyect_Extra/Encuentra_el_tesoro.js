const tableBoard$$ = document.querySelector('[data-function="board"]'); //Crear nodo tabla
const attempts$$ = document.querySelector('[data-function="attempts"]'); //crear nodo nº intentos
const winUrl = "./assets/win.png"; //crear variables de las 3 imagenes (default, miss, win)
const missUrl = "./assets/miss.png";
const defaultUrl = "./assets/default.png";
const winCoordinates = { x: 0, y: 0 }; //crear objeto coordenadas eje X Y

const printBoard = () => {  
  const rows = prompt("Elige el número de filas del tablero"); //funcion para elegir el tablero en base al prompt para filas y columnas
  const cols = prompt("Ahora elige el número de columnas");
  randomBox(rows, cols); //llamada a la funcion que elige coordenadas aleatorias
  tableBoard$$.innerHTML = '';
  for (let i = 0; i < rows; i++) {
    //bucle para dibujar la tabla en base a las cols y rows del prompt
    const tr$$ = document.createElement("tr"); // creamos las filas
    for (let j = 0; j < cols; j++) {
      const td$$ = document.createElement("td"); //creamos las columnas
      const img$$ = document.createElement("img"); // creamos la imagen default
      img$$.setAttribute("src", defaultUrl);
      td$$.addEventListener("click", function () {  //añadimos el evento a cada celda para comprobar si es la ganadora cuando se haga click        
        checkshot(img$$, i, j);
      }, {once: true});
      td$$.appendChild(img$$);
      tr$$.appendChild(td$$);
    }
    tableBoard$$.appendChild(tr$$);
  }
}

const checkshot = (img$$, i, j) => {
 
  attempts$$.textContent = Number(attempts$$.textContent) + 1;    // incrementamos el nº de intentos

  if (winCoordinates.x === i && winCoordinates.y === j) {        // comprobamos si es la casilla ganadora
    img$$.setAttribute('src', winUrl)
    setTimeout(function() { alert('HAS GANADO en ' + Number(attempts$$.textContent) + ' intentos!!!') }, 200);
    const button$$ = document.createElement("button");
    button$$.textContent = "¿Jugar de nuevo?";
    document.body.appendChild(button$$);    
    button$$.addEventListener("click", function (event) {
    location.reload();
    });  
    
    } else {
      img$$.setAttribute("src", missUrl);
    }
  }

 //funcion para comprobar si el intento es correcto

const randomBox = (maxRows, maxCols) => {                        // //funcion elegir coordenadas aleatorias
  winCoordinates.x = Math.floor(Math.random() * maxRows);
  winCoordinates.y = Math.floor(Math.random() * maxCols);
}
setTimeout(checkshot, 30000);
printBoard(); //llamada a la funcion para crear el tablero
