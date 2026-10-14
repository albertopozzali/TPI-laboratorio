const prodotti = [
 {
   id: 1,
   nome: "Notebook",
   categoria: "Informatica",
   prezzo: 850,
   quantita: 2,
   disponibile: true
 },
 {
   id: 2,
   nome: "Mouse",
   categoria: "Accessori",
   prezzo: 25,
   quantita: 5,
   disponibile: true
 },
 {
   id: 3,
   nome: "Monitor",
   categoria: "Informatica",
   prezzo: 230,
   quantita: 3,
   disponibile: false
 },
 {
   id: 4,
   nome: "Tastiera",
   categoria: "Accessori",
   prezzo: 45,
   quantita: 4,
   disponibile: true
 }
];

//console.log(prodotti);
console.table(prodotti);

//ARROW FUNCTION - è un modo più compatto per scrivere una funzione

//vediamo una funzione che riceve un prodotto e restituisce il valore calcolato moltiplicando prezzo e quantità

const calcolaValore = (prodotto) => {
    const valore = (prodotto.prezzo)*(prodotto.quantita);
    return valore;
};

console.log("\nARROW FUNCTION")
console.log("Valore dei notebook: ", calcolaValore(prodotti[0]), " €");

const mostraProdotto = (prodotto, indice) => {
    console.log(`${indice+1}. ${prodotto.nome} - ${prodotto.prezzo} €`)
}

//FOREACH
console.log("\nFOREACH")
prodotti.forEach(mostraProdotto);

console.log("\nMAP")

//MAP() è un metodo che esegue una funzione callback per ogni elemento e costruisce un nuovo array con i valori restituiti dalla callback.

//Significa che map() prende gli elementi dell'array uno alla volta e, per ciascuno, chiama la funzione che gli abbiamo fornito .

//Scorre l'array;
//passa ogni elemento alla callback;
//la callback elabora quell'elemento;
//map() reccoglie tutti i risultati in un nuovo array.

const nomiProdotti = prodotti.map((prodotto) => {
    return prodotto.nome;
})
console.log("\nNomi dei prodotti: ");
console.log(nomiProdotti);

const valoriProdotti = prodotti.map((prodotto) => {
    return prodotto.prezzo*prodotto.quantita;
})
console.log("\nValori dei prodotti: ");
console.log(valoriProdotti);

console.log("\nFILTER");
//FILTER() restituisce un nuovo array contenente solamente gli elementi che rispettano una condizione.

const prodottiCostosi = prodotti.filter((prodotto) => {
    return prodotto.prezzo>100;
});

console.log("\nProdotti con prezzo maggiore di 100");
console.log(prodottiCostosi);

//map = trasforma ogni elemento dell'array
//filter = seleziona solo gli elementi che rispettano una condizione

//VISUALIZZA PRODOTTI DISPONIBILI USANDO FILTER

console.log("\nFILTER prodotti disponibili");
const prodottiDisponibili = prodotti.filter((prodotto) => {
    return prodotto.disponibile;
})
console.table(prodottiDisponibili);

//find() cerca il primo elemento che rispetta una condizione.
//Restituisce l'oggetto trovato

const prodottoTrovato = prodotti.find((prodotto) => {
  return prodotto.id===3;
})

console.log("Prodotto con id 3: ");
console.log(prodottoTrovato);

//reduce()
//Elabora tutti gli elementi dell'array e restituisce un unico risultato

//In questo esempio calcoliamo il valore complessivo dei prodotti.

//Sintassi:
//array.reduce((accumulatore, elementoCorrente) => {
// return nuovoAccumulatore
//},
//valoreIniziale
//)

const valoreComplessivo = prodotti.reduce((totale, prodotto) => {
  const valoreProdotto = prodotto.prezzo*prodotto.quantita;
  return totale+valoreProdotto;
},
0
);
console.log(`Valore complessivo dei prodotti: ${valoreComplessivo} €`)

//ESEMPI MINIMALI
const numeri = [1, 2, 3, 4]

const somma = numeri.reduce((accumulatore, numeroCorrente) => {
  return accumulatore + numeroCorrente;
}, 0);
console.log(somma);

const moltiplicazione = numeri.reduce((accumulatore, numeroCorrente) => {
  return accumulatore*numeroCorrente;
}, 1);
console.log(moltiplicazione);

//SPREAD OPERATOR CON GLI ARRAY
//Permette di espandere gli elementi di un array, può essere utilizzato per:
// - copiare un array,
// - aggiungere elementi,
// - unire più array

// Copia dell'array

const copiaProdotti = [...prodotti];
console.table(copiaProdotti);


const nuovoProdotto = {
  id: 5,
  nome: "Webcam",
  categoria: "Accessori",
  prezzo: 60,
  quantita: 3,
  disponibile: true
}

//Aggiunta elemento

const prodottiAggiornati = [...prodotti, nuovoProdotto];
console.table(prodottiAggiornati);

console.log("elementi array originale", prodotti.length);
console.log("elementi array nuovo", prodottiAggiornati.length);

//Unione di due array

const altriProdotti = [{
  id: 6,
  nome: "Stampante",
  categoria: "Informatica",
  prezzo: 150,
  quantita: 1,
  disponibile: true
}]

const catalogoCompleto = [
  ...prodottiAggiornati,
  ...altriProdotti
];

console.log("Unione di due array")
console.table(catalogoCompleto)

//SPREAD OPERATOR può essere usato per copiare le proprietà di un oggetto.

//sort()
//ordina gli elementi dell'array
//crea una copia con lo spread operator e ordina in modalita crescente

const copiaCatalogoProdotti = [...prodotti];

// Ordina dalla A alla Z usando localeCompare (ideale per le stringhe)
copiaCatalogoProdotti.sort((a, b) => a.nome.localeCompare(b.nome));
console.log("Prodotti ordinati per nome: ")
console.table(copiaCatalogoProdotti);

// Ordina dal prezzo più basso al più alto
copiaCatalogoProdotti.sort((a, b) => a.prezzo - b.prezzo);
console.log("Prodotti ordinati per prezzo: ")
console.table(copiaCatalogoProdotti);