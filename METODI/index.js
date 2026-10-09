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