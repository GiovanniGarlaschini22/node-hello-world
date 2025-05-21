// IMPORT //
import printNewString from "./functions/functions.js";


console.log("Hello World");
// stampo la funzione //
console.log(printNewString());

// utilizzo variabile process con chiave argv //
const hello = process.argv[2];
const name = process.argv[3];
console.log(printNewString(hello, name));