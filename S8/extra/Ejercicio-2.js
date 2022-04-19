/* Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. Para ello deberemos ejecutar el comando que comentabamos anteriormente y 
hacer un .fetch() a la url `http://localhost:3000/diary`.
Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date. Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>`` para su .title, .date y .description respectivamente.
Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho... */
     

const url = 'http://localhost:3000/diary';

const orderDiaryNotes = diary => diary.sort((a, b) => new Date(a.date) - new Date(b.date));

const createDiaryNotes = (diaryNotes) => {
    for (let diaryNote of diaryNotes) {
        const div$$ = document.createElement('div');
        div$$.innerHTML = `<h3>${diaryNote.title}</h3><h5>${diaryNote.date}</h5><p>${diaryNote.description}</p>`
        const deleteBtn$$ = document.createElement('button');
        deleteBtn$$.textContent = 'Eliminar';
        div$$.appendChild(deleteBtn$$);
        document.body.appendChild(div$$);
        deleteBtn$$.addEventListener("click",  () => {
        div$$.remove();
        });
    }
}

  fetch(url).then(res => res.json()).then(diary => {
    const orderedDiary = orderDiaryNotes(diary);
    createDiaryNotes(orderedDiary);    
});





