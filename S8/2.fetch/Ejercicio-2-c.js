//En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

const baseUrl = "https://api.nationalize.io";

const search = () => {
  const input$$ = document.querySelector("input");

  fetch(baseUrl + "?name=" + input$$.value)
    .then((res) => res.json())
    .then((person) => {
      createNation(person);
      console.log(person.country);
    });
};

function createNation(person) {
  const p$$ = document.createElement("p");
  const deleteBtn$$ = document.createElement("button");
  deleteBtn$$.textContent = "X";

  for (let country of person.country) {
    const percentage = Math.floor(country.probability * 100);
    p$$.innerHTML = `El nombre ${person.name} tiene un ${percentage}% de posibilidades de ser ${country.country_id}`;
  }

  document.body.appendChild(p$$);
  document.body.appendChild(deleteBtn$$);
  deleteBtn$$.addEventListener("click", function () {
    p$$.remove();
    deleteBtn$$.remove();
  });
};

const button$$ = document.querySelector("button");
button$$.addEventListener("click", search);
