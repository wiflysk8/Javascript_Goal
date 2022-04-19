//Inserta dinamicamente en un html un div que contenga una p con javascript.
const div$$ = document.createElement ('div');
const p$$ = document.createElement ('p');

div$$.appendChild(p$$);

document.body.appendChild(div$$);