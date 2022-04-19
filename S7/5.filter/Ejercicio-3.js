//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends'.

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
 
//const lolPlayers = streamers.filter(streamer => streamer.gameMorePlayed.toLowerCase() ===  'League of Legends'.toLowerCase());
const lolPlayers = streamers.filter(streamer => streamer.gameMorePlayed.toLowerCase().includes('League of Legends'.toLowerCase()));
console.log(lolPlayers);
