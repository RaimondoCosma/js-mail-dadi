'use stricy';

/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

// 1. Creo una lista contenente delle email 
const emails = ['raimondo@gmail.com', 'roberto@gmail.com', 'alfredo@gmail.com', 'giulio@gmail.com'];

// 2. hiedo all'utente di inserire la sua email
const userEmail = prompt('Inserisci la tua email:')