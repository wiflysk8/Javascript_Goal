//Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
// Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. 
//Imprime cada array en por consola.
let shortMovies = [];
let midMovies = [];
let longMovies = [];
const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];

for(movie of movies) {
    if (movie.durationInMinutes >= 200) {
        longMovies.push(movie);
    } else if (movie.durationInMinutes > 100 ) {
        midMovies.push(movie);
    } else {
        shortMovies.push(movie);
    }
} 
console.log("Películas pequeñas: ", shortMovies);
console.log("Películas medianas: ", midMovies);
console.log("Películas grandes: ", longMovies);