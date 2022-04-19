//Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.

const middleDiv$$ = document.querySelectorAll('div')[1];

const p$$ = document.createElement('p');
p$$.textContent = "Voy en medio!";
middleDiv$$.appendChild(p$$);

document.body.appendChild(middleDiv$$);