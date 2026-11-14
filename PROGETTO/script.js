const Bottone_carta = document.getElementById("carta");
const Bottone_sasso = document.getElementById("sasso");
const Bottone_forbice = document.getElementById("forbice");
const Giocata_cpu = document.getElementById("giocata_cpu");
const punteggio = document.getElementById("punteggio");
const feedback = document.getElementById("feedback");

let partite = 0;
let vinte = 0;
let giocata_CPU = -1; // 0=carta, 1=sasso, 2=forbice

Bottone_carta.addEventListener('click', () => mostra_giocata_CPU(0));
Bottone_sasso.addEventListener('click', () => mostra_giocata_CPU(1));
Bottone_forbice.addEventListener('click', () => mostra_giocata_CPU(2));

function stampa_risultato() {
    punteggio.innerHTML = `Partite: ${partite} - Vinte: ${vinte}`;
}

function mostra_giocata_CPU(giocata_utente){
    giocata_CPU = Math.floor(Math.random() * 3);
    if (giocata_CPU === 0) {
        Giocata_cpu.src = "carta.png";
    } else if (giocata_CPU === 1) {
        Giocata_cpu.src = "sasso.png";
    } else {
        Giocata_cpu.src = "forbice.png";
    }
    partite += 1;
    if (giocata_CPU === giocata_utente){
        feedback.style.color = 'yellow';
        feedback.innerHTML = "PAREGGIO";
        stampa_risultato();
        return
    } else if (giocata_CPU === 0 && giocata_utente === 2 || giocata_CPU === 1 && giocata_utente === 0 || giocata_CPU === 2 && giocata_utente === 1){
        vinte += 1;
        feedback.style.color = 'green';
        feedback.innerHTML = "VINTA";
        stampa_risultato();
        return;
    } else {
        feedback.style.color = 'red';
        feedback.innerHTML = "PERSA";
        stampa_risultato();
        return;
    }
}
