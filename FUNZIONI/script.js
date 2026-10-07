const formAcquisto= document.getElementById("formAcquisto")
const tabellaFeedback= document.getElementById("tabellaFeedback")
const bottoneEliminaTutto= document.getElementById("bottoneEliminaTutto")
let totComplessivo= document.getElementById("totComplessivo")
let valTot = 0
 
//GESTIONE EVENTO SUBMIT
 
formAcquisto.addEventListener("submit", gestisciSubmit)
 
const dati= JSON.parse(localStorage.getItem("dati")) || []; //se non ce niente crea un array vuoto
 
function calcolaSubtotale(prezzo, quantita) {
    const subtotale= prezzo*quantita
    return subtotale
}
 
function calcolaSconto(subtotale) {
    let sconto= 0
    if (subtotale>= 100) {
        sconto= subtotale*0.10
    }
 
    return sconto
}
 
function calcolaTotale(subtotale, sconto) {
    totale= subtotale-sconto
    return totale
}
 
 
function creaRiga(valori) {
    const campi = ["prodotto", "prezzo", "quantita", "subtotale", "sconto", "totale"];
   
    const riga = document.createElement("tr");
 
    // Scorro tutti i campi per creare le celle
    for (let i = 0; i < campi.length; i++) {
        const cella = document.createElement("td");
        if (campi[i] == "prodotto" || campi[i] == "quantita"){
            cella.textContent = valori[campi[i]];
        } else {
            cella.textContent = valori[campi[i]] + "€";
        }
        riga.appendChild(cella);
        if (campi[i] == "totale"){
            valTot += valori[campi[i]];
            totComplessivo.textContent = `Totale complessivo: ${valTot} € `
        }
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
            valTot -= valori.totale;
            totComplessivo.textContent = `Totale complessivo: ${valTot} € `;
        }
        
        localStorage.setItem("dati", JSON.stringify(dati)); // Aggiorna il localStorage dopo l'eliminazione
    });
 
    // Inserisco la riga nella tabella (spostato dentro la funzione creaRiga)
    tabellaFeedback.appendChild(riga);
}
 
function gestisciSubmit(event) {
    event.preventDefault()
 
    //recupero il nome del prodotto
    const prodotto= document.getElementById("prodotto").value.trim()
 
    //prendiamo il prezzo
    //Number() la converte in numero
    const prezzo= Number(document.getElementById("prezzo").value)
 
    //prendiamo la quantita
    const quantita= Number(document.getElementById("quantita").value)
 
    const subtotale= calcolaSubtotale(prezzo, quantita)
 
    const sconto= calcolaSconto(subtotale)
 
    const totale= calcolaTotale(subtotale, sconto);

 
    if (!prodotto || !prezzo || !quantita){
        alert("Compila tutti i campi!");
        return;
    }
 
    const valori = {
        prodotto,
        prezzo,
        quantita,
        subtotale,
        sconto,
        totale
    };
 
    dati.push(valori);
    localStorage.setItem("dati", JSON.stringify(dati));
 
    creaRiga(valori);
    formFeedback.reset();
}
 
bottoneEliminaTutto.addEventListener("click", () => {
    dati.length = 0; // Svuota l'array dei dati
    tabellaFeedback.innerHTML = "";
    localStorage.removeItem("dati", JSON.stringify(dati)); // Aggiorna il localStorage dopo l'eliminazione
    valTot = 0;
    totComplessivo.textContent = `Totale complessivo: ${valTot} € `;
});