/*json-server --watch exercise-4.json. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.
La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y,
que si el usuario hace click en alguno de los planetas, salga debajo los personajes que están asociadospor el .idPlanet a ese planeta en cuestión, 
mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener la información de los personajes podemos hacer un filtro de los personajes llamando a la url, por ejemplo
http://localhost:3000/characters?idPlanet=1`` y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado. 
Además de esto, agrega un buscador para poder filtrar los personajes una vez que has seleccionado el planeta. Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.
 */
//?idPlanet=1

const planetsUrl = "http://localhost:3000/planets";
const charactersUrl = "http://localhost:3000/characters";
const planets$$ = document.querySelector('[data-function="planets"]'); //div de los planetas
const characters$$ = document.querySelector('[data-function="characters"]'); //div de los personajes

//Funcion para pintar los planetas
const getPlanets = () => {
  fetch(planetsUrl)
    .then((res) => res.json())
    .then((planets) => {
      for (let planet of planets) {
        const planetDiv$$ = document.createElement("div");
        planetDiv$$.className = "div__planets";
        planetDiv$$.innerHTML = `<h2>Planeta: ${planet.name}</h2><img src ="${planet.image}">`;
        planets$$.appendChild(planetDiv$$);
        planetDiv$$.addEventListener("click", () => getCharacters(planet.id));
      }
    });
};

//funcion para pintar los personajes de cada planeta que clickemos
const getCharacters = (planetId) => {
  characters$$.innerHTML = "";
  fetch(charactersUrl)
    .then((res) => res.json())
    .then((characters) => {
      for (let character of characters) {
        if (character.idPlanet === planetId) {
          const divCharacter$$ = document.createElement("div");
          divCharacter$$.className = "div__characters";
          divCharacter$$.innerHTML = `<h3>${character.name}</h2><a href =""><img class = "character__img" src ="${character.avatar}"></a>`;
          characters$$.appendChild(divCharacter$$);
        }
      }
    });
};

//Boton para reiniciar la busqueda
const btn$$ = document.createElement("button");
btn$$.textContent = "Nueva busqueda";
document.body.appendChild(btn$$);
btn$$.addEventListener("click", function (event) {
  location.reload();
});

//funcion para filtrar por input los personajes
const filterCharacters = () => {
  fetch(charactersUrl)
    .then((res) => res.json())
    .then((characters) => {
      console.log(input$$.value);
      for (let character of characters) {
        if (character.name.toLowerCase() === input$$.value.toLowerCase()) {
          const divCharacter$$ = document.createElement("div");
          divCharacter$$.className = "div__characters";
          divCharacter$$.innerHTML = `<h3>${character.name}</h2><a href =""><img class = "character__img" src ="${character.avatar}"></a>`;
          characters$$.appendChild(divCharacter$$);
        }
      }
    });
};

//Creamos el input
const input$$ = document.createElement("input");
document.body.appendChild(input$$);
input$$.addEventListener("input", () => filterCharacters());
console.log(input$$.value);

getPlanets();
