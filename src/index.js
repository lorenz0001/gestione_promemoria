const prompt = require("prompt-sync")();

promemoria = [];
let scelta = 0;

function confrontaDate(){
    const dataCorrente = new Date();
    if (dataCorrente < data) {
      return 1;
    } else if (dataCorrente >= data) {
      return 0;
    }
}

function aggiungi(){
    let nome, mese, giorno, ora;
    console.log("Inserire l'attività (frase breve e concisa): ");
    nome = prompt();
    console.log("Inserire il mese scadenza: ");
    do{
        mese = prompt();
    }while(mese <= 0 || mese > 12);
    console.log("Inserire il giorno scadenza: ");
    giorno = promot();
    console.log("Inserire l'ora scadenza: ");
    ora = prompt();
    promemoria.push({nome:nome,mese:mese,giorno:giorno,ora:ora});
}

function mostraPrimi(){
    for(let i=0;i<promemoria.length;i++){

    }
}

do{
    mostraPrimi();
    console.log("Cosa vuoi fare?\n1)Aggiungere un promemoria\n2)Cancellare un promemoria\n3)Visualizzare tutti i promemoria\n4)Visualizzare/Modificare dettagli promemoria");
    scelta = parseInt(prompt());
    switch(scelta){
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        default:
            console.log("Scelta non valida");
    }
}while(scelta != 0);