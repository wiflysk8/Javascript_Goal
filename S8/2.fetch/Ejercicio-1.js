//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. 
//Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

fetch('https://api.agify.io?name=michael').then(res=>res.json()).then(function(resvalue) {
    console.log(resvalue);
    printData(resvalue);
});

function printData(data) {
    const h1$$ = document.createElement('h1');
    h1$$.innerHTML =`Nombre:  ${data.name}`;
    const h2$$ = document.createElement('h2');
    h2$$.innerHTML = `<span class="test">Edad: ${data.age} <br> Count: ${data.count}</span>`;
    document.body.appendChild(h1$$)
    document.body.appendChild(h2$$)
}