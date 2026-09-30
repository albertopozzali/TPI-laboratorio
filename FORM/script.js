const form = document.getElementById("form")
const formFeedback = document.getElementById("formFeedback")
const messaggio = document.getElementById("messaggio")
const tabellaFeedback = document.getElementById("tabellaFeedback")

formFeedback.addEventListener("submit", gestisciSubmit);


function gestisciSubmit(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const ora = document.getElementById("ora").value;
    const tipoFeedback = document.getElementById("tipoFeedback").value;
    const testoFeedback = document.getElementById("messaggio").value.trim();
    const newsletter = document.getElementById("iscriviti").ariaChecked;

    if (!nome || !email || !data || !ora || !tipoFeedback || !testoFeedback){
        alert("Compila tutti i campi!")
        return
    }

    const iscrizione = newsletter ? "Si" : "No" //Operatore ternario

    //Creare un array che contiene tutti i valori che voglio inserire nella riga della tabella
    const valori = [
        nome,
        email,
        data,
        ora,
        tipoFeedback,
        testoFeedback,
        iscrizione
    ];

    const riga = document.createElement("tr");

    //scorro tutti gli elementi dell'array valori
    for(let i=0; i < valori.length; i++){
        const cella = document.createElement("td");
        cella.textContent = valori[i];
        //aggiungere la cella alla riga
        riga.appendChild(cella);

    }

    //Creare la cella che conterrà il pulsante elimina
    const cellaAzioni = document.createElement("td");

    //creo il pulsante
    const bottoneElimina = document.createElement("button");
    cellaAzioni.appendChild(bottoneElimina)
    riga.appendChild(cellaAzioni)

    bottoneElimina.textContent = "ELIMINA";
    bottoneElimina.addEventListener("click", () => {
        riga.remove();
    });


    // bottoneElimina.addEventListener("click", function(){
    //     riga.remove();
    // })


    // bottoneElimina.addEventListener("click", eliminaRiga);
    // function eliminaRiga (){
    //     riga.remove();
    // }

    tabellaFeedback.appendChild(riga);
}