/**
 * @fileoverview Funzioni per la gestione dei promemoria
 * @author Lorenzo D'Augello
 */

let id = 0;

let categorie = ["default","hobby", "lavoro", "personale"];

/**
 * Confronta la data del promemoria con la data corrente.
 * 
 * @param {Object} promemoria - Oggetto contenente il promemoria.
 * @returns {number} 1 se la data del promemoria è nel futuro, 0 se è già scaduto.
 */

export function confrontaDate(promemoria){
    const dataCorrente = new Date();
    return dataCorrente < promemoria.data ? 1 : 0;
}

/**
 * Controlla se esiste già un promemoria con lo stesso nome
 * 
 * @param {Array} promemoria - Vettore contenente gli oggetti promemoria
 * @param {String} nome - Nome del promemoria da cercare
 * @returns {boolean} true se esiste, false se non esiste
 */

function controllaEsiste(promemoria, nome){
    for(let o of promemoria){
        if(o.nome == nome)
            return true;
    }
    return false;
}

/**
 * Aggiunge un promemoria al vettore dei promemoria
 * 
 * @param {Array} promemoria - Vettore contenente gli oggetti promemoria
 * @param {prompt} prompt - oggetto prompt-sync
 */

export function aggiungi(promemoria, prompt){
    let nome, res, categoria;
    do{
        console.log("Inserire l'attività (frase breve e concisa): ");
        nome = prompt();
        res = controllaEsiste(promemoria, nome);
        if(res)
            console.log("Esiste già una attivita con questo nome");
    }while(res);
    let data = creaData(prompt);
    console.log("Inserire categoria per il promemoria, invio per default");
    categoria = prompt().toLowerCase();
    if(categoria === "")
        categoria = "default";
    else if(!categorie.includes(categoria)){
        console.log("Nuova categoria aggiunta: " + categoria);
        categorie.push(categoria);
    }
    promemoria.push({id:id,nome:nome,data:data,categoria:categoria});
    id += 1;
}

/**
 * Stampa i dettagli del promemoria con categoria
 * 
 * @param {Object} prom - Oggetto promemoria
 */

export function stampa(prom){
    console.log("Promemoria id: " + prom.id + ",nome: " + prom.nome + ", data scadenza: " + prom.data  + ", categoria: " + prom.categoria);
}

/**
 * Stampa i dettagli del promemoria senza categoria
 * 
 * @param {Object} prom - Oggetto promemoria
 */

export function stampa2(prom){
    console.log("Promemoria id: " + prom.id + ",nome: " + prom.nome + ", data scadenza: " + prom.data);
}

/**
 * Stampa i primi 5 promemoria più vicini alla data corrente sia scaduti che non
 * 
 * @param {Array} promemoria - Vettore contenente gli oggetti promemoria
 */

export function mostraPrimi(promemoria){
    promemoria.sort((a, b) => a.data - b.data);

    let c = 0;
    if(promemoria.length != 0){
        console.log("Primi promemoria prossimi alla scadenza");
        for (let i = 0; i < promemoria.length && c < 5; i++) {
            if (confrontaDate(promemoria[i])) {
                stampa(promemoria[i]);
                c++;
            }
        }
    
        c = 0;
        console.log("Primi promemoria scaduti");
        for (let i = promemoria.length - 1; i >= 0 && c < 5; i--) {
            if (!confrontaDate(promemoria[i])) {
                stampa(promemoria[i]);
                c++;
            }
        }
    }
}

/**
 * Rimuove un promemoria dal vettore dei promemoria
 * 
 * @param {Array} promemoria - Vettore contenente gli oggetti promemoria
 * @param {prompt} prompt - oggetto prompt-sync
 */

export function cancella(promemoria, prompt) {
    mostraTutti(promemoria);
    let trovato = false;
    let id;
    if (promemoria.length !== 0) {
        do {
            console.log("Inserire id (-1 per cancellare): ");
            id = parseInt(prompt());
            if (id === -1) {
                console.log("Operazione di cancellazione annullata.");
                break;
            }
            trovato = false;
            for (let i in promemoria) {
                if (promemoria[i].id === id) {
                    promemoria.splice(i, 1);
                    trovato = true;
                    console.log(`Promemoria con ID ${id} cancellato.`);
                    break;
                }
            }
            if (!trovato) {
                console.log("ID inserito non valido");
            }
        } while (!trovato);
    } else {
        console.log("Lista dei promemoria vuota");
    }
}

/**
 * Stampa tutti i promemoria salvati nel vettore promemoria
 * 
 * @param {Array} promemoria - Vettore contenente gli oggetti promemoria
 */

export function mostraTutti(promemoria){
    promemoria.sort((a, b) => a.data - b.data);
    console.log("NON SCADUTI");

    for(let categoria of categorie){
        let trovato = false;
        for(let p of promemoria){
            if(trovato)
                console.log("Categoria: " + categoria)
            if(p.categoria == categoria && confrontaDate(p)){
                trovato = true;
                stampa2(p);
            }
        }
    }
    console.log("SCADUTI");
    for(let categoria of categorie){
        let trovato = false;
        for(let p of promemoria){
            if(trovato)
                console.log("Categoria: " + categoria)
            if(p.categoria == categoria && !confrontaDate(p)){
                trovato = true;
                stampa2(p);
            }
        }
    }
}

function creaData(prompt){
    let anno, mese, giorno, ora, minuti;
    let data;
    do {
        console.log("Inserire l'anno scadenza: ");
        anno = parseInt(prompt());
        do {
            console.log("Inserire il mese scadenza: ");
            mese = parseInt(prompt());
        } while (mese <= 0 || mese > 12);
        
        console.log("Inserire il giorno scadenza: ");
        giorno = parseInt(prompt());
        console.log("Inserire l'ora scadenza: ");
        ora = parseInt(prompt());
        console.log("Inserire minuti scadenza: ");
        minuti = parseInt(prompt());

        data = new Date(anno, mese - 1, giorno, ora, minuti);
        if (isNaN(data.getTime())) {
            console.log("Data non valida, riprova.");
        }
    } while (isNaN(data.getTime()));
    
    return data;
}

export function modificaPromemoria(promemoria, prompt){
    mostraTutti(promemoria);
    let trovato = false;
    let id;
    let scelta;
    let nome;
    let categoria;
    if (promemoria.length !== 0) {
        do {
            console.log("Inserire id (-1 per cancellare): ");
            id = parseInt(prompt());
            if (id === -1) {
                console.log("Operazione di modificazione annullata.");
                break;
            }
            trovato = false;
            for (let i in promemoria) {
                if (promemoria[i].id === id) {
                    trovato = true;
                    console.log("Cosa vuoi modificare?: \n1) Nome\n2) Data scadenza\n3) Categoria\n");
                    scelta = parseInt(prompt());
                    switch(scelta){
                        case 1:
                            console.log("Inserire il nuovo nome: ");
                            nome = prompt();
                            promemoria[i].nome = nome;
                            break;
                        case 2:
                            promemoria[i].data = creaData(prompt);
                            break;
                        case 3:
                            console.log("Inserire nuova categoria (invio per default): ");
                            categoria = prompt().toLowerCase();
                            if(categoria === "")
                                categoria = "default";
                            else if(!categorie.includes(categoria)){
                                console.log("Nuova categoria aggiunta: " + categoria);
                                categorie.push(categoria);
                            }
                            promemoria[i].categoria = categoria;
                            break;
                        default:
                            console.log("scelta non valida");
                    }
                    break;
                }
            }
            if (!trovato) {
                console.log("ID inserito non valido");
            }
        } while (!trovato);
    } else {
        console.log("Lista dei promemoria vuota");
    }   
}