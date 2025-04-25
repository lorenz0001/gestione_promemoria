export function confrontaDate(){
    const dataCorrente = new Date();
    if (dataCorrente < data) {
      return 1;
    } else if (dataCorrente >= data) {
      return 0;
    }
}

export function aggiungi(){
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

export function stampa(prom){
    
}

export function mostraPrimi(){
    let i = 0;
    for(let i=0;i<promemoria.length;i++){
        if(confrontaDate(promemoria[i]) && i < 5){
            stampa(promemoria[i]);
            i+=1;
        }
    }
}

export function cancella(){

}

export function mostraTutti(){

}