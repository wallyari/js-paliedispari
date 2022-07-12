// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

//creo una variabile per chiedere una parola all'utente.
let userWord = prompt('Inserisci una parola');

//definisco le condizioni 
reverseWord (userWord);

if(userWord === reverseWord(userWord)){
    console.log ('è palindroma');
    
    alert('è palindroma');

} else {
    console.log ('non è palindroma')
    
    alert('non è palindroma');
};

//- invoco la funzionwe
//- inizializzo un ciclo while
//- scorro la stringa come un arrey (da -1 fino a <=0)

function reverseWord(stringa){
    
    //var vuota | per parola invertita
    let userWordReverse ='';
    
    //var| indice = lunghezza della parola
    let i = stringa.length - 1;
    
    // ciclo while |  i--
    while (i >= 0){
        userWordReverse += stringa[i];
        i--;
    }
    return userWordReverse;
};


