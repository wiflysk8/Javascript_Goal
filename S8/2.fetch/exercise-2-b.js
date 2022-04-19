const baseUrl = 'https://api.nationalize.io';

const search = () => {
    const input$$ = document.querySelector('input');

    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(person =>{
        createNationalizeP(person)
    })
}

const createNationalizeP = (person) => {
    const p$$ = document.createElement('p');
   

    for (const country of person.country) {
        const percentage = Math.floor(country.probability * 100);
        p$$.innerHTML = `El nombre ${person.name} tiene un ${percentage} porciento de ser de ${country.country_id}`;
    }

    

    document.body.appendChild(p$$);
}   

const button$ = document.querySelector('button');

button$.addEventListener('click', search);
