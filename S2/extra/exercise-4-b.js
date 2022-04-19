//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.

const countries = [{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }];


for (let index = 0; index < countries.length; index++) {
    const div$$ = document.createElement('div');
    const country = countries[index];
    div$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`;
    
    const btn$$ = document.createElement('button');
    document.body.appendChild(div$$);
    btn$$.textContent = 'Remove';

    

    btn$$.addEventListener('click', function () {
        const div$$ = document.body.querySelectorAll('div');
        
    })
    

}

