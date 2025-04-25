let id = 0;

export function confrontaDate(data){
    const dataCorrente = new Date();
    if (dataCorrente < data) {
      return 1;
    } else if (dataCorrente >= data) {
      return 0;
    }
}

function controllaEsiste(promemoria, nome){
    for(let o of promemoria){
        if(o.nome == nome)
            return true;
    }
    return false;
}

export function aggiungi(promemoria, prompt){
    let nome, anno, mese, giorno, ora, minuti, res;
    do{
        console.log("Inserire l'attività (frase breve e concisa): ");
        nome = prompt();
        res = controllaEsiste(promemoria, nome);
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
    console.log("Inserire minuti scadenza: ");
    minuti = prompt();
    console.log(anno + " " + mese + " " + giorno + " " + ora + " " +minuti);
    let data = new Date(anno, mese - 1, giorno, ora, minuti);
    promemoria.push({id:id,nome:nome,data:data});
    promemoria.sort((a, b) => b.data - a.data);
    id += 1;
}

export function stampa(prom){
    console.log("Promemoria id: " + prom.id + ",nome: " + prom.nome + ", " + prom.data);
}

export function mostraPrimi(promemoria){
    let i = 0;
    for(let i=0;i<promemoria.length;i++){
        if(confrontaDate(promemoria[i]) && i < 5){
            stampa(promemoria[i]);
            i+=1;
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
    for(let o of promemoria){
        stampa(o);
    }
}