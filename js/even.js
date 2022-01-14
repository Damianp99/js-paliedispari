/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

/*
    1° Con un prompt facciamo inserire un numero all'utente (1-5)
    2° Con una funzione generiamo un numero per il PC (1-5)
    3° Somma dei numeri 
    4° Stabiliamo se la somma dei numeri scelti da user e PC è pari o dispari
    5° Dichiara il vincitore
*/


const userNumber = parseInt(prompt('Inserisci un numero'));
console.log(userNumber)

let pcNumber = pcRandomNum();

function pcRandomNum() {
    let pcNumber = Math.floor(Math.random() * 5 + 1);
    console.log(pcNumber)
}










