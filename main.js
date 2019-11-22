// Dichiaro alcune variabili globali da utilizzare nel Gioco
var maxcasuali = 16; // Numero fisso di numeri casuali generati dal computer
var numericasuali = []; // Array che conterra i numeri casuali generati dal computer
var minimo; // numero minimo da inserire
var massimo; // numero massimo da inserire
var puntiutente = 0; // Variabile che memorizza i punti utente
var esitomossa = false; // Variabile che ci indica se abbiamo beccato una mina o meno
var giocate = 0; // // Variabile che conta le giocate effettuate

// Chiedo all'utente il livello di difficoltà del gioco
alert('Benvenuto nel Gioco Campo minato');
var scelta = parseInt(prompt('Scegli il  livello di gioco: (digita 0 = facile; 1 = medio; 2 = difficile)'));

// Chiamo la funzione di scelta dei livelli
livelligioco(scelta);
// Chiamo la funzione che genera l'array dei numeri casuali per giocare in base al livello scelto
generatorenumerigioco(minimo, massimo);
// Chiamo la funzione che regola il gioco
partita(minimo,massimo,esitomossa);
// Chiamo la funzione che indica l'esito del risultato
risultatogioco(esitomossa);


// Funzione che ci indica l'esito della partita
function risultatogioco(esito) {
    // Verifico l'esito della partita
    if (esitomossa) {
        alert('Hai perso!!!!....Hai beccato una mina!!!')
        console.log('Colpito e affondato!!!!....Hai beccato una mina!!!');
    } else if (giocate == (massimo - maxcasuali)){
        alert('Complimenti hai vinto la battaglia!!!')
        console.log('Complimenti hai vinto la battaglia!!!');
    }
    alert('Il tuo punteggio finale è: ' + puntiutente);
    console.log('Il tuo punteggio finale è: ' + puntiutente);
}
// Funzione per la scelta dei livelli del Gioco
function livelligioco(livello) {
    // Utilizzo delle condizioni in base alla scelta dell'utente
    switch (livello) {
        case 1:
            minimo = 1;
            massimo = 80;
            break ;
        case 2:
            minimo = 1;
            massimo = 100;
            break ;
        default:
            minimo = 1;
            massimo = 50;
    }
}
// Funzione che fà la logica del gioco
function partita(min, max, mossa) {
    console.log(min + '' + max  + '' + mossa);
    var numeriutente = []; //Dichiaro un array per conservare i numeri inseriti dall'utente
    var numerotentativi =  max - maxcasuali; // Numero massimo di giocate previste
    console.log(numerotentativi);
    // numerotentativi = 5;
    console.log('Numero di giocate previste ' + numerotentativi);
    do {
        numeroutente = parseInt(prompt('Inserisci un numero da ' +  min + ' a ' + max));
            if (!numeriutente.includes(numeroutente)) { // Controllo che l'utente non ha inserito di nuovo lo stesso numero
                numeriutente.push(numeroutente); // Inserisco nell'array il numero digitato dall' utente
                console.log(numeroutente);
                if (numericasuali.includes(numeroutente)) {
                    return esitomossa = true; // Imposto a vero la variabile che mi dice che ho trovato una mina
                } else {
                    puntiutente++; // Aggiorno i punti totalizzati dall'utente
                    giocate++; // Aggiorno le giocate fatte dall'utente
                }
            } else {
                alert('Attenzione il numero: ' + numeroutente + 'è già stato inserito')
                console.log('Questo numero è già inserito');
            }
        console.log('Numero giocata: ' + giocate);
        console.log('Punti utente: ' + puntiutente);
    } while (giocate < numerotentativi);
    return esitomossa;
}
// Funzione che genera un array di numeri random tra min e max in base al livello scelto dall'utente
function generatorenumerigioco(min, max) {
    while(numericasuali.length < maxcasuali) {
        var numero = Math.floor(Math.random() * (max - min + 1) ) + min;
        if(!numericasuali.includes(numero)) {
            numericasuali.push(numero);
        }
    }
    console.log(numericasuali);
}
