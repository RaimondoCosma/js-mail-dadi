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
// const userEmail = prompt('Inserisci la tua email:')

const triggerBtn = document.querySelector('#btn-trigger');
const warning = document.querySelector('.warning-email');

triggerBtn.addEventListener('click', function() {
    const userEmail = document.getElementById('user-email').value;
    const inputEmail = document.getElementById('input-email');
    const warning = document.querySelector('.warning-email');
    warning.innerHTML = `<span style="color: red;">L'email non è presente nel nostro database</span>`;
    inputEmail.classList.add('shake');
    for (let i = 0; i < emails.length; i++) {
        if ( userEmail === emails[i]) {
            warning.innerHTML = `<span style="color: green;">L'email è valida</span>`;
            warning.classList.add('show');
            inputEmail.classList.remove('shake');
            console.log(`L'email è valida`);
        } else {
            warning.classList.add('warning-email-show'); 
            console.log(`L'email non è presente nel nostro database`);  // Attenzione ad inserire gli else nel ciclo for
        }
        console.log(userEmail, emails[i]);
    }
});

// SOLUZIONE POST CORREZIONE

// 3. Pongo le condizioni di verifica
// Imposto variabile falsa per trovare l'email dentro l'array
// let found = false
// for (let i = 0; i < emails.length; i++) {
//     if ( userEmail === emails[i]) {
//         found = true;
//      break;           // Il break mi interrompe il ciclo una volta che la condizione è vera
// }

// if ( found ) {
//     alert('Email trovata');
// } else {
//     alert('Email non presente');
// }