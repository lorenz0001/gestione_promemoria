import p from 'prompt-sync';
import {confrontaDate,aggiungi,stampa,mostraPrimi,cancella,mostraTutti} from "./utils.js";

const prompt = p();

let promemoria = [];
let scelta = 0;

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