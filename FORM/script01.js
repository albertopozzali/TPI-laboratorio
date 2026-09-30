const formFeedback = document.getElementById("formFeedback");
const tabellaFeedback = document.getElementById("tabellaFeedback");

formFeedback.addEventListener("submit", gestisciSubmit);
const dati = [];

function creaRiga(valori) {
    const campi = ["nome", "email", "data", "ora", "tipoFeedback", "testoFeedback", "iscrizione"];
    
    const riga = document.createElement("tr");

    // Scorro tutti i campi per creare le celle
    for (let i = 0; i < campi.length; i++) {
        const cella = document.createElement("td");
        cella.textContent = valori[campi[i]];
        riga.appendChild(cella);
    }

    // Creare la cella per il pulsante elimina
    const cellaAzioni = document.createElement("td");
    const bottoneElimina = document.createElement("button");
    bottoneElimina.textContent = "ELIMINA";
    
    cellaAzioni.appendChild(bottoneElimina);
    riga.appendChild(cellaAzioni);

    // Evento per eliminare la riga e l'oggetto dall'array
    bottoneElimina.addEventListener("click", () => {
        const indice = dati.indexOf(valori);
        if (indice !== -1) { // Corretto: verifica che l'elemento esista (-1 significa non trovato)
            dati.splice(indice, 1);
            riga.remove();
        }
    });

    // Inserisco la riga nella tabella (spostato dentro la funzione creaRiga)
    tabellaFeedback.appendChild(riga);
}

function gestisciSubmit(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const ora = document.getElementById("ora").value;
    const tipoFeedback = document.getElementById("tipoFeedback").value;
    const testoFeedback = document.getElementById("messaggio").value.trim();
    const newsletter = document.getElementById("iscriviti").checked;

    if (!nome || !email || !data || !ora || !tipoFeedback || !testoFeedback) {
        alert("Compila tutti i campi!");
        return;
    }

    const iscrizione = newsletter ? "Si" : "No";

    const valori = {
        nome,
        email,
        data,
        ora,
        tipoFeedback,
        testoFeedback,
        iscrizione
    };

    dati.push(valori);
    creaRiga(valori);
    formFeedback.reset();
}