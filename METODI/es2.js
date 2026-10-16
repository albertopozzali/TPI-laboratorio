const attivita = [ 
  { id: 1, titolo: "Analizzare i requisiti", stato: "Da fare", priorita: "Alta", responsabile: "Marta", oreStimate: 2 }, 
  { id: 2, titolo: "Disegnare l'interfaccia", stato: "In corso", priorita: "Media", responsabile: "Luca", oreStimate: 3 }, 
  { id: 3, titolo: "Creare il form", stato: "Da fare", priorita: "Alta", responsabile: "Sara", oreStimate: 4 }, 
  { id: 4, titolo: "Testare il salvataggio", stato: "Completato", priorita: "Media", responsabile: "Amir", oreStimate: 2 }, 
  { id: 5, titolo: "Scrivere il README", stato: "Da fare", priorita: "Bassa", responsabile: "Luca", oreStimate: 1 }, 
  { id: 6, titolo: "Correggere gli errori", stato: "In corso", priorita: "Alta", responsabile: "Marta", oreStimate: 3 } 
]; 

console.table(attivita);

const attivitaInCorso = attivita.filter((attivita) => {
    return attivita.stato === "In corso";
})

console.log("Attività in corso: ");
console.table(attivitaInCorso);

const nuovoArray = [];
attivita.forEach(attivita => {
    nuovoFormato = `${attivita.titolo} - Responsabile: ${attivita.responsabile}`
    nuovoArray.push(nuovoFormato);
});

console.table(nuovoArray);

const attivitaPerPriorita = attivita.find ((attivita) => {
    return attivita.priorita === "Alta" && attivita.stato== "Da fare";
})

console.table(attivitaPerPriorita);

const attivitaNonCompletate = attivita.filter((attivita) => {
    return attivita.stato !== "Completato";
});

const oreComplessive = attivitaNonCompletate.reduce((totOre, attivita) => {
    return totOre+attivita.oreStimate;
}, 0)

console.log("Ore complessive delle attività non completate: ")
console.log(oreComplessive)

const copiaAttivita = [...attivita];
copiaAttivita.map((attivita) => {
    if(attivita.id == 3){
        attivita.stato = "In corso";
    }
})

console.log("Array originale")
console.table(attivita)
console.log("Nuovo arrai con id3 modificato")
console.table(copiaAttivita);