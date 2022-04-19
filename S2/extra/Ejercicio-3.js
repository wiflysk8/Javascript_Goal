//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
//favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

const users = [
    {
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 50 },
            rain: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 30 },
            shower: { format: 'ogg', volume: 55 },
            train: { format: 'mp3', volume: 60 },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: { format: 'mp3', volume: 50 },
            train: { format: 'ogg', volume: 60 },
            firecamp: { format: 'mp3', volume: 80 },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: { format: 'mp3', volume: 67 },
            wind: { format: 'ogg', volume: 35 },
            firecamp: { format: 'mp3', volume: 60 },
        }
    },
]

let favSongsArray = [];

for (let user of users) {
    for (let sound in user.favSongsArray) {
        if(favSongsArray.lenght) {
        let hasFavourite = false;
        for (let favoriteSound of favSongsArray) {
            if (favoriteSound.name === sound) {
                hasFavourite = true;
                favoriteSound.count++;
                break;
            }
        }

        if (!hasFavourite) {
            favSongsArray.push({name: sound, count:1})
        } 
    
        } else{
            favSongsArray.push({name: sound, count:1})
            }
    } 
}
console.log(favSongsArray);