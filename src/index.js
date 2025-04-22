const prompt = require("prompt-sync")();

promemoria = [];
let scelta = 0;

function confrontaDate(){
    const dataCorrente = new Date();
    if (dataCorrente < data) { // in scadenza
      return 1;
    } else if (dataCorrente >= data) { // scaduto
      return 0;
    }
}

function aggiungi(){
    let nome, mese, giorno, ora, res;
    do{
        console.log("Inserire l'attività (frase breve e concisa): ");
        nome = prompt();
        res = controllaEsiste(nome);
        if(res)
            console.log("Esiste già una attivita con questo nome");
    }while(res);
    console.log("Inserire l'anno scadenza: ");
    anno = prompt();
    do{
        console.log("Inserire il mese scadenza: ");
        mese = prompt();
    }while(mese <= 0 || mese > 12);
    console.log("Inserire il giorno scadenza: ");
    giorno = prompt();
    console.log("Inserire l'ora scadenza: ");
    ora = prompt();

    data = new Date(anno, mese - 1, giorno, ore, minuti);
    promemoria.push({nome:nome,data:data});
    promemoria.sort((a, b) => b.data - a.data);
}

function stampa(prom){
    
}

function mostraPrimi(){
    let i = 0;
    for(let i=0;i<promemoria.length;i++){
        if(confrontaDate(promemoria[i]) && i < 5){
            stampa(promemoria[i]);
            i+=1;
        }
    }
}

function cancella(){

}

function mostraTutti(){

}

do{
    mostraPrimi();
    console.log("Cosa vuoi fare?\n1)Aggiungere un promemoria\n2)Cancellare un promemoria\n3)Visualizzare tutti i promemoria\n4)Visualizzare/Modificare dettagli promemoria");
    scelta = parseInt(prompt());
    switch(scelta){
        case 1:
            aggiungi();
            break;
        case 2:
            cancella();
            break;
        case 3:
            mostraTutti();
            break;
        default:
            console.log("Scelta non valida");
    }
}while(scelta != 0);