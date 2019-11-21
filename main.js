// Chiedo all'utente il livello di difficoltà del gioco
alert('Benvenuto nel Gioco Campo minato');
var scelta = parseInt(prompt('Scegli il  livello di gioco: (digita 0 = facile; 1 = medio; 2 = difficile)'));
var maxcasuali = 16; // Numero fisso di numeri casuali generati dal computer
var numericasuali = []; // Array che conterra i numeri casuali generati dal computer
var minimo; // numero minimo da inserire
var massimo; // numero massimo da inserire
var puntiutente = 0; // Variabile che memorizza i punti utente
var affondato; // Variabile che ci indica se abbiamo beccato una mina o meno
// Utilizzo delle condizioni in base alla scelta dell'utente
switch (scelta) {
    case 0:
        var minimo = 1;
        var massimo = 50;
        generaArrayRandom(minimo, massimo);
        affondato = gioca(minimo, massimo);
        break ;
    case 1:
        var minimo = 1;
        var massimo = 80;
        generaArrayRandom(minimo, massimo);
        affondato = gioca(minimo, massimo);
        break ;
    default:
        var minimo = 1;
        var massimo = 100;
        generaArrayRandom(minimo, massimo);
        affondato = gioca(minimo, massimo);
}

// Verifico l'esito della partita
if (affondato) {
    alert('Colpito e affondato!!!!....Hai beccato una mina!!!')
    console.log('Colpito e affondato!!!!....Hai beccato una mina!!!');
} else {
    alert('Complimenti hai vinto la battaglia!!!')
    console.log('Complimenti hai vinto la battaglia!!!');
}
    alert('Il tuo punteggio finale è: ' + puntiutente);
console.log('Il tuo punteggio finale è: ' + puntiutente);


// Funzione che fà la logica del gioco
function gioca(min, max) {
    var numeriutente = []; //Dichiaro un array per conservare i numeri inseriti dall'utente
    var numerotentativi =  max - numericasuali.length; // Numero massimo di giocate previste
    console.log(numerotentativi);
    // numerotentativi = 5;
    console.log('Numero di giocate previste ' + numerotentativi);
    var giocate = 0; // Variabile che conta le giocate effettuate
    var colpito = false; // imposto a false la variabile che mi indica che ho trovato una mina
    do {
        numeroutente = parseInt(prompt('Inserisci un numero da ' +  min + ' a ' + max));
            if (!numeriutente.includes(numeroutente)) { // Controllo che l'utente non ha inserito di nuovo lo stesso numero
                numeriutente.push(numeroutente); // Inserisco nell'array il numero digitato dall' utente
                console.log(numeroutente);
                if (numericasuali.includes(numeroutente)) {
                    puntiutente++; // Aggiorno i punti totalizzati dall'utente
                    giocate++; // Aggiorno le giocate fatte dall'utente
                } else {
                    return colpito = true; // Imposto a vero la variabile che mi dice che ho trovato una mina
                }
            } else {
                alert('Attenzione il numero: ' + numeroutente + 'è già stato inserito')
                console.log('Questo numero è già inserito');
            }
    } while ((numericasuali.includes(numeroutente)) && (giocate < numerotentativi));
    return colpito;
}


// Funzione che genera un array di numeri random tra min e max in base al livello scelto dall'utente
function generaArrayRandom(min, max) {
    while(numericasuali.length < maxcasuali) {
        var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
        if(!numericasuali.includes(numero)) {
            numericasuali.push(numero);
        }
    }
    console.log(numericasuali);
}
