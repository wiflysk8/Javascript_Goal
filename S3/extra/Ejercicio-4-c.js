//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
const countries = [{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }];

for (let country of countries) {
    const div$$ = document.createElement('div');
    div$$.innerHTML = `<h2>${country.title}/<h2><img src=${country.imgUrl}></img>`;
    const button$$ = document.createElement('button');
    button$$.textContent = 'Remove Item';
    
    div$$.appendChild(button$$);

    document.body.appendChild(div$$);
    button$$.addEventListener('click', function () {
    div$$.remove(); 
    })
}

