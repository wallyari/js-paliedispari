
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const userNumber= prompt ('Scegli un numero');
const userChoice = parseInt(prompt('Inserisci un numero da 1 a 5'));
const computerNumber = getRandomNumber (1,5);

const sumNumber = computerNumber + userChoice;
const resultEvenorodd = checkEvenorodd(sommaNumeri);

console.log('computerNumber');




if (userNumber== resultEvenorodd){
    alert ('Hai vinto');
} else {
    alert ('Ha vinto il computer');
}

function checkEvenorodd (numero){
    if (numero % 2 == 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}

function getRandomNumber (min,max){
    returb (Math.floor(Math.random8() * (max - min + 1)) + min);
}