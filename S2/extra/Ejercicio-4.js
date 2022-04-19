//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
//posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
//Haz varios ejemplos y compruebalos.


let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];


function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++){
        if(array[i] === text) {
            return i;
        }
    }
}

console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Salamandra'));

console.log(findArrayIndex(['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'], 'Mosquito'));