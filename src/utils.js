let id = 0;

let categorie = ["default","hobby", "lavoro", "personale"];

export function confrontaDate(promemoria){
    const dataCorrente = new Date();
    return dataCorrente < promemoria.data ? 1 : 0;
}

function controllaEsiste(promemoria, nome){
    for(let o of promemoria){
        if(o.nome == nome)
            return true;
    }
    return false;
}

export function aggiungi(promemoria, prompt){
    let nome, anno, mese, giorno, ora, minuti, res, categoria;
    do{
        console.log("Inserire l'attività (frase breve e concisa): ");
        nome = prompt();
        res = controllaEsiste(promemoria, nome);
        if(res)
            console.log("Esiste già una attivita con questo nome");
    }while(res);
    console.log("Inserire l'anno scadenza: ");
    anno = parseInt(prompt());
    do{
        console.log("Inserire il mese scadenza: ");
        mese = parseInt(prompt());
    }while(mese <= 0 || mese > 12);
    console.log("Inserire il giorno scadenza: ");
    giorno = parseInt(prompt());
    console.log("Inserire l'ora scadenza: ");
    ora = parseInt(prompt());
    console.log("Inserire minuti scadenza: ");
    minuti = parseInt(prompt());
    console.log("Inserire categoria per il promemoria, invio per default");
    categoria = prompt().toLowerCase();
    if(categoria === "")
        categoria = "default";
    else if(!categorie.includes(categoria)){
        console.log("Nuova categoria aggiunta: " + categoria);
        categorie.push(categoria);
    }
    let data = new Date(anno, mese - 1, giorno, ora, minuti);
    promemoria.push({id:id,nome:nome,data:data,categoria:categoria});
    id += 1;
}

export function stampa(prom){
    console.log("Promemoria id: " + prom.id + ",nome: " + prom.nome + ", data scadenza: " + prom.data  + ", categoria: " + prom.categoria);
}

export function stampa2(prom){
    console.log("Promemoria id: " + prom.id + ",nome: " + prom.nome + ", data scadenza: " + prom.data);
}

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