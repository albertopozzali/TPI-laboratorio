const datasetURL = import.meta.env.VITE_DATASET_URL;

async function fetchData(url){
  try{
    const response = await fetch (url);
    if(!response.ok){
      throw new Error(`Errore HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data
  } catch (error) {
    console.error(`Errore nei dati: ${error.message}`);
    return [];
  }
}

// Recupero i dati come array di oggetti
const arrayData = await fetchData(datasetURL);
console.table(arrayData);

// Creiamo una tabella HTML per visualizzare i dati 
function renderTable(arrayData){
  let rows = "";
  for(let i=0; i<arrayData.length; i++){
    const item = arrayData[i];
    rows += `<tr>
                <td>${item["Anno"]}</td>
                <td>${new Date (item["Data"]).toLocaleDateString()}</td>
                <td>${item["Giorno"]}</td>
                <td>${item["Totale (Smc)"]}</td>
              </tr>`;
  }
// .toLocaleDateString() converte la stringa della data nel formato locale

  document.getElementById("app").innerHTML += `<table border="1">
                                                <thead>
                                                  <tr>
                                                    <th>Anno</th>
                                                    <th>Data</th>
                                                    <th>Giorno</th>
                                                    <th>Totale (Smc)</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  ${rows}
                                                </tbody>
                                              </table>`;
}

// Chiamo la funzione per renderizzare la tabella
renderTable(arrayData);

// Esercizio:
// 1) Filtrare la tabella solo per anno (metodo filter);
// 2) Totale dai m^3 di Gas Consumato (metodo reduce);
// 3) Cambiare tutta la colonna della data (metodo map) mettendola in italiano: new Date(item["Data"]).toLocaleDateString().

function tabellaFiltrata(arrayData) {
  const annoFiltro = 2020; // Anno scelto come criterio di filtro
  
  // Filtriamo la lista originale: teniamo solo le righe dell'anno scelto
  const datiFiltrati = arrayData.filter((item) => {
    return item["Anno"] === annoFiltro;
  });
  
  let rows = "";
  for(let i=0; i<datiFiltrati.length; i++){
    const item = datiFiltrati[i];
    rows += `<tr>
                <td>${item["Anno"]}</td>
                <td>${new Date (item["Data"]).toLocaleDateString()}</td>
                <td>${item["Giorno"]}</td>
                <td>${item["Totale (Smc)"]}</td>
              </tr>`;
  }
// .toLocaleDateString() converte la stringa della data nel formato locale

  document.getElementById("app").innerHTML += `
                                              <p>Tabella filtrata per l'anno ${annoFiltro}</p>
                                              <table border="1">
                                                <thead>
                                                  <tr>
                                                    <th>Anno</th>
                                                    <th>Data</th>
                                                    <th>Giorno</th>
                                                    <th>Totale (Smc)</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  ${rows}
                                                </tbody>
                                              </table>`;
}

tabellaFiltrata(arrayData);

function calcolaTotaleGas(arrayData) {
  // .reduce() somma tutti i valori della colonna "Totale (Smc)" partendo da 0
  const totaleSmc = arrayData.reduce((totale, item) => {
    return totale + Number(item["Totale (Smc)"]);
  }, 0);

  // Aggiungiamo il risultato a schermo con un paragrafo
  document.getElementById("app").innerHTML += `
    <p>Il totale complessivo del gas consumato è: ${totaleSmc} Smc</p>
  `;
}

// Chiamiamo la funzione per calcolare e mostrare il totale
calcolaTotaleGas(arrayData);