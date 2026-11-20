const datasetURL = import.meta.env.VITE_DATASET_URL;

async function promiseFetchDati(url){
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