//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados 
//y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.
let isApproved = "";
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let alumn of alumns) {
    
    let aprprovedNum = 0;
    if (alumn.T1 == true) {
        aprprovedNum ++
        } 
    if (alumn.T2 == true) {
        aprprovedNum ++;
        }
    if (alumn.T3 == true) {
        aprprovedNum ++;
        }
        
    if (alumn.isApproved = aprprovedNum >= 2) {
            console.log(alumn.name + " ha aprobado porque tiene " + aprprovedNum + " asignaturas aprobadas.");
        } else {
            console.log(alumn.name + " ha suspendido porque tiene " + aprprovedNum + " asignaturas aprobadas.");
            }
 }

