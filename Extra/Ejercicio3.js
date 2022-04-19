//En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.

const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]

let arrayA = [];

for (let animal of animals) {
    for (let i = 0; i < animal.length; i++){
        if (animal[i] === 'a' ? arrayA.push(animal[i]) : animal[i]);        
    }
}
console.log('Nº de caracteres "a": ', arrayA.length);