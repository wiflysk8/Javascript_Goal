// Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement('ul');//creamos el nodo de la lista

for (let i = 0; i < apps.length; i++) {        // recorro el bucle tantas veces como elementos tenga el array
    const li$$ = document.createElement('li'); // en cada iteracion del bucle creamos un li
    li$$.textContent = apps[i];// insertamos el contenido de cada elemento del array
    ul$$.appendChild(li$$);//insertamos el li que acabamos de crear a la ul
}

document.body.appendChild(ul$$);// enviamos la lista el index
