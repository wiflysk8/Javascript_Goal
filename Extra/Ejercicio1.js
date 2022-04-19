/* Crea una función llamada splitName que divida un nombre completo en nombre y apellido. Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.
De tal modo que si tenemos el texto "Abel Cabeza" obtendremos dos variables...una con el valor "Abel" y otra con el valor "Cabeza".
En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf() */

let nombre;
let firstName;
let lastName;

const splitName = (nombre) => {
 let i = nombre.indexOf(' ')
 firstName = nombre.substring(0,i);
 lastName = nombre.substring(i + 1);
 return "Nombre: " + firstName + '\n' + "Apellido: " + lastName;
}
console.log(splitName('Luis Martínez'));