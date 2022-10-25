'use strict';

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// 1. Dichiaro la variabile che genera un numero random da 1 a 6 per l'utente
let userNumber = Math.floor(Math.random() * 6) + 1;
// 2. Dichiaro la variabile che genera un numero random da 1 a 6 per il bot
let botNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, botNumber)

// 3. Pongo le condizione per la vittoria
if (userNumber > botNumber) {
    alert(`Complimenti! Hai vinto. Ricarica la pagina per continuare a giocare`);
} else if (userNumber === botNumber) {
    alert(`Pareggio`);
    window.location.reload();
} else if (userNumber < botNumber) {
    alert(`Mi dispiace! Hai perso. Ricarica la pagina per continuare a giocare`);
}