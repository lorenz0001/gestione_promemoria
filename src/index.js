const prompt = require("prompt-sync")();

let scelta = 0;

function mostraPrimi(){
    
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