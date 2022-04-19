//En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga..
//'El nombre X tiene un Y porciento de ser de Z' etc etc.

//EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.


const baseUrl = 'https://api.nationalize.io';

const search = () => {
    const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value).then(res=>res.json()).then(person=>{
     createNation(person);
     console.log(person);
    })
}

const createNation = (person) =>{
    const p$$ = document.createElement('p');

    for (let country of person.country) {
        const percentage = Math.floor(country.probability * 100);
        p$$.innerHTML = `El nombre ${person.name} tiene un ${percentage}% de posibilidades de ser ${country.country_id}`
    }

    document.body.appendChild(p$$);
}

const button$$ = document.querySelector('button');
button$$.addEventListener('click', search);

