// Genero 16 numeri casuali tra 0 e 100 controllando che non siano uguali
var numericasuali = [];

// Riempio l'array con 16 numeri random diversi
while(numericasuali.length < 16) {
    var numero = generaRandom(1, 100);
    if(!numericasuali.includes(numero)) {
        numericasuali.push(numero);
    }
}

console.log(numericasuali);


// Chiedo all'utenteil livello di difficoltà del gioco


// Chiedo all'utente un numero tra 1 e 100
//numerotentativi = 100 - numericasuali.length;

var numeriutente = []; //Dichiaro un array per conservare i numeri inseriti dall'utente
var numerotentativi = 100 - numericasuali.length; //Numero massimo di giocate previste
console.log('Numero di giocate previste ' + numerotentativi);
var puntiutente = 0; // Variabile che memorizza i punti utente
var giocate = 0; // Variabile che conta le giocate effettuate
var colpito = false; // imposto a false la variabile che mi indica che ho trovato una mina
do {
    numeroutente = parseInt(prompt('Inserisci un numero da 1  a  100'))
        if (!numeriutente.includes(numeroutente)) { // Controllo che l'utente non ha inserito di nuovo lo stesso numero
            numeriutente.push(numeroutente); // Inserisco nell'array il numero digitato dall' utente
            console.log(numeroutente);
            if (numericasuali.includes(numeroutente)) {
                puntiutente++; // Aggiorno i punti totalizzati dall'utente
                giocate++; // Aggiorno le giocate fatte dall'utente
            } else {
                colpito = true; // Imposto a vero la variabile che mi dice che ho trovato una mina
            }
        } else {
            console.log('Questo numero è già inserito');
        }
} while ((numericasuali.includes(numeroutente)) && (giocate <= numerotentativi));


if (colpito) {
    console.log('Colpito e affondato!!!!....Hai beccato una mina!!!');
} else {
    console.log('Complimenti hai vinto la battaglia!!!');
}
console.log('Il tuo punteggio finale è: ' + puntiutente);


// Funzione che genera un numero random tra min e max
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
}
