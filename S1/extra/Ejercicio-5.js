//Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.

const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

let totalPrice = 0;
let mediumPrice = 0;
for (let product of products) {
    totalPrice = product.sellCount + totalPrice;
} 
mediumPrice = (totalPrice / products.length)
console.log("El precio medio de los artículos es: ", mediumPrice);
