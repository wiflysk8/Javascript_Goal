//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.

const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];

for (let country of countries) {
    const div$$ = document.createElement('div');
    div$$.innerHTML = `<h2>${country.title}/<h2><img src=${country.imgUrl}></img>`
    document.body.appendChild(div$$);
}

const btnClick$$ = document.querySelector('button');

btnClick$$.addEventListener('click', function (event){
   const allDiv$$ = document.querySelectorAll('div');
   allDiv$$[allDiv$$.length-1].remove();
});

