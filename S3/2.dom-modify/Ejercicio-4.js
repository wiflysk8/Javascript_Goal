//Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p$$ = document.createElement('p');
p$$.textContent = "Soy dinámico!";

document.body.appendChild(p$$);