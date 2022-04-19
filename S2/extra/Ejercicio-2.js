  const users = [
     {name: 'Manolo el del bombo',
         favoritesSounds: {
             waves: {format: 'mp3', volume: 50},
             rain: {format: 'ogg', volume: 60},
             firecamp: {format: 'mp3', volume: 80},
         }
     },
     {name: 'Mortadelo',
         favoritesSounds: {
             waves: {format: 'mp3', volume: 30},
             shower: {format: 'ogg', volume: 55},
             train: {format: 'mp3', volume: 60},
         }
     },
     {name: 'Super Lopez',
         favoritesSounds: {
             shower: {format: 'mp3', volume: 50},
             train: {format: 'ogg', volume: 60},
             firecamp: {format: 'mp3', volume: 80},
         }
     },
     {      name: 'El culebra',
            favoritesSounds: {
             waves: {format: 'mp3', volume: 67},
             wind: {format: 'ogg', volume: 35},
             firecamp: {format: 'mp3', volume: 60},
         }
     },
 ]

 //Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

let soundsArray = [];

for (let user of users) {
    for (let sound in user.favoritesSounds) {
        let favouriteSound = user.favoritesSounds[sound];
        soundsArray.push(favouriteSound.volume);
    }
} 

let totalVolume = 0;
for (let sound of soundsArray) {
    totalVolume = sound + totalVolume;
}
let mediumVolume = (totalVolume / soundsArray.length);

console.log("El volumen medio de los sonidos es: ",mediumVolume + " decibelios");





 