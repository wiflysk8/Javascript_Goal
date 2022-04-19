//Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón, 
//pasando como parametro de la api, el valor del input.


const baseUrl = 'https://api.nationalize.io?name=';

const input$$ = document.querySelector('input');

const search = () => {
fetch(baseUrl + '?name=' + input$$.value).then(res=>res.json()).then(resValue=>{
    console.log(resValue);
})

}

const button$$ = document.querySelector('button');
button$$.addEventListener('click', search);