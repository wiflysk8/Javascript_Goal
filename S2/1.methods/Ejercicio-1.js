//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC camiseta']

for (let product of products) {
    if (product.toLowerCase().includes("Camiseta".toLowerCase())) {
        console.log(product);
    }    
}