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
        } else {
            warning.classList.add('show');
        }
    }
});
// 3. Pongo le condizioni di verifica
// for (let i = 0; i < emails.length; i++) {
//     if ( userEmail === emails[i]) {
//         alert(`L'email è valida`);
//     } else {
//         console.log(`L'email non è presente nel nostro database`);
//     }
//     console.log(userEmail, emails[i]);
// }