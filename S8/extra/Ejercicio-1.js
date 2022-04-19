/* En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que visualizar una galería con las imagenes 
y los nombres de los personajes de la serie. Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.
la imagen está en la propiedad 'img' y el título en la propiedad 'name'. */

const url = 'https://breakingbadapi.com/api/characters';

fetch(url).then(res => res.json()).then(characters => {
    printCharacters(characters);
})
const h1$$ = document.createElement('h1');
h1$$.textContent = '💎 BREAKING BAD CHARACTERS 💎';
document.body.appendChild(h1$$);
const gallery$$ = document.createElement('section')
const printCharacters = (characters) => {
    for (let character of characters) {

        if (!character.name.includes('Holly White')){
        const galleryItem$$ = document.createElement('div');
        const titleP$$ = document.createElement('p');
        const img$$ = document.createElement('span');

        img$$.innerHTML = `<img src=${character.img}>`;
        titleP$$.innerHTML = `<p><a href>${character.name}</a></p`;
        
        galleryItem$$.appendChild(titleP$$);
        galleryItem$$.appendChild(img$$);
        gallery$$.appendChild(galleryItem$$);
        }
        
    } document.body.appendChild(gallery$$);
} 