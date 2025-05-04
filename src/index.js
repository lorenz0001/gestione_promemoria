/**
 * @fileoverview Programma per la gestione dei promemoria
 * @author Lorenzo D'Augello
 */

import p from 'prompt-sync';
import {aggiungi,mostraPrimi,cancella,mostraTutti} from "./utils.js";

const prompt = p();

let promemoria = [];
let scelta = 0;

do{
    mostraPrimi(promemoria);
    console.log("Cosa vuoi fare?\n1)Aggiungere un promemoria\n2)Cancellare un promemoria\n3)Visualizzare tutti i promemoria\n4)Visualizzare/Modificare dettagli promemoria\n0)Esci");
    scelta = parseInt(prompt());
    switch(scelta){
        case 1:
            aggiungi(promemoria, prompt);
            break;
        case 2:
            cancella(promemoria, prompt);
            break;
        case 3:
            mostraTutti(promemoria);
            break;
        case 0:
            break;
        default:
            console.log("Scelta non valida");
    }
}while(scelta != 0);