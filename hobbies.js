/* traccia:
Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
Esporta la funzione dal file.*/

function hobbies (hobbyOne, hobbyTwo, hobbyThree){
    let hobbies = []
    hobbies.push(hobbyOne, hobbyTwo, hobbyThree)
    return hobbies
}

module.exports = hobbies;

console.log(hobbies('football', 'films', 'videogames'));
