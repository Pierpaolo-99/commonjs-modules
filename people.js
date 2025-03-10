/* traccia:
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. */

const names = require("./names")
const hobbies = require("./hobbies")

function people (){
    let people = {
        fullName: names('Pierpaolo','Dell Ioio'),
        hobbies: hobbies('football','videogames','coding')
    }
    return people
}

console.log(people());
