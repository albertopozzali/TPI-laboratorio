const eventi = [
 { id: 1, titolo: "Torneo di robotica", categoria: "Tecnologia", costo: 12, posti: 24, iscritti: 18, attivo: true },
 { id: 2, titolo: "Laboratorio di fotografia", categoria: "Arte", costo: 8, posti: 15, iscritti: 15, attivo: true },
 { id: 3, titolo: "Visita al museo della scienza", categoria: "Scienze", costo: 20, posti: 30, iscritti: 21, attivo: true },
 { id: 4, titolo: "Corso di primo soccorso", categoria: "Formazione", costo: 0, posti: 20, iscritti: 12, attivo: false },
 { id: 5, titolo: "Hackathon scolastico", categoria: "Tecnologia", costo: 5, posti: 40, iscritti: 35, attivo: true },
 { id: 6, titolo: "Teatro serale", categoria: "Cultura", costo: 15, posti: 25, iscritti: 9, attivo: true }
];

const postiLiberi = (evento) => evento.posti - evento.iscritti;
eventi.forEach((evento) => {
  console.log(`${evento.titolo} | posti liberi: ${postiLiberi(evento)}`);
});
console.log("Numero elementi array eventi:", eventi.length);

const eventiConDisponibilita = eventi.map((evento) => ({
  ...evento, 
  postiLiberi: postiLiberi(evento)
}));

console.table(eventiConDisponibilita);

const eventiPrenotabili = eventiConDisponibilita.filter((evento) => {
  return evento.postiLiberi > 0;
});

const eventiTecnologia = eventiConDisponibilita.filter((evento) => {
  return evento.categoria==="Tecnologia";
})

console.log("Eventi Prenotabili: ");
console.table(eventiPrenotabili);
console.log("Eventi Tecnologia: ");
console.table(eventiTecnologia);

const eventoId3 = eventi.find((evento) => {
  return evento.id === 3
});
if (eventoId3) {
  console.log(`ID 3 -> Titolo: ${eventoId3.titolo}, Iscritti: ${eventoId3.iscritti}`);
} else {
  console.log("Evento non trovato");
}

const eventiCompleti = eventiConDisponibilita.find((evento) => {
  return evento.postiLiberi === 0;
})
console.log("Eventi al completo: ");
console.table(eventiCompleti);

const eventoId67 = eventi.find((evento) => {
  return evento.id === 67
});
if (eventoId67) {
  console.log(`ID 67 -> Titolo: ${eventoId67.titolo}, Iscritti: ${eventoId3.iscritti}`);
} else {
  console.log("Evento non trovato");
}

//Sintassi:
//array.reduce((accumulatore, elementoCorrente) => {
// return nuovoAccumulatore
//},
//valoreIniziale
//)

const numeroTotIscritti = eventiConDisponibilita.reduce((totale, evento) => {
  return totale+evento.iscritti;
}, 0);
console.log(`Totale iscritti: ${numeroTotIscritti}`);

const totIncassi = eventiConDisponibilita.reduce((totale, evento) => {
  const incasso = evento.costo*evento.iscritti;
  return totale + incasso;
}, 0);
console.log(`Totale incassi: ${totIncassi}€`)

