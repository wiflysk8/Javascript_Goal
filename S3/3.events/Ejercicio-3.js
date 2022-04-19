//Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

function onInput(event){
    console.log(event.target.value);
}

const input$$ = document.querySelector('input');

input$$.addEventListener('input', onInput);

