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
    promemoria.sort((a, b) => a.data - b.data);
    id += 1;
}

export function stampa(prom){
    console.log("Promemoria id: " + prom.id + ",nome: " + prom.nome + ", data scadenza: " + prom.data  + ", categoria: " + prom.categoria);
}

export function stampa2(prom){
    console.log("Promemoria id: " + prom.id + ",nome: " + prom.nome + ", data scadenza: " + prom.data);
}

export function mostraPrimi(promemoria){
    let count = 0;
    for (let i = 0; i < promemoria.length && count < 5; i++) {
        if (confrontaDate(promemoria[i])) {
            stampa(promemoria[i]);
            count++;
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
    for(let categoria of categorie){
        console.log("Categoria: " + categoria)
        for(let p of promemoria){
            if(p.categoria == categoria)
                stampa2(p);
        }
    }
}