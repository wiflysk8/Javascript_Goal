//Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. 
//Recuerda que puedes usar la función `.includes()` para comprobarlo.
const newArray = [];
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
]

for (let toy of toys) {    
    
    if (!toy.name.includes("gato")) {
         newArray.push(toy);
      
    }
}console.log(newArray);
