//Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

const removeAll$$ = document.querySelectorAll('.fn-remove-me');


for (const remove$$ of removeAll$$) {
    remove$$.remove();
}