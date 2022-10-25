'use strict';

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

// 1. Dichiaro la variabile che genera un numero random da 1 a 6 per l'utente
let userNumber = Math.floor(Math.random() * 6) + 1;
// 1. Dichiaro la variabile che genera un numero random da 1 a 6 per il bot
let botNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, botNumber)