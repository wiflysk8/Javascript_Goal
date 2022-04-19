//Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

function onFocus(event){
    console.log(event.target.value);
}

const input$$ = document.querySelector('input');

input$$.addEventListener('focus', onFocus);