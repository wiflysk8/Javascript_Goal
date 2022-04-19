//Al siguiente javascript no funciona como deberia...podrias arreglarlo?
//Deberia de imprimir por consola "Abel".

const user = {name: "Abel", surname: "Cabeza"}

function a(user){
    const nama = b(user.surname);
    console.log(nama)
}

function b(nama){
    return "Que pasa " + nama;
}

a(user);