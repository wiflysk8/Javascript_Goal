// Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click 
//que ejecute un console log con la información del evento del click

/* function handleclick(event){
    console.log(event);
} */

const btnToClick$$ = document.querySelector('#btnToClick');

btnToClick$$.addEventListener('click', function (event){
    console.log(event);
});

