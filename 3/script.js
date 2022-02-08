window.onload = function () {
    const palo = ["corazones", "picas", "trebol", "diamantes"]
    const valor = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let valorRandom = Math.floor(Math.random() * valor.length);
    let paloRandom = Math.floor(Math.random() * palo.length);
    document.querySelector('.valor').innerHTML = valor[valorRandom]
    document.querySelector('.palo-inferior').classList.add(palo[paloRandom]);
    document.querySelector('.palo').classList.add(palo[paloRandom]);
    
    switch(paloRandom){
        case 0: 
        const paloCorazon=document.querySelectorAll('.corazones')
        paloCorazon.forEach(cora => cora.innerHTML = "♥");
        break;
        case 1: 
        const paloPicas=document.querySelectorAll('.picas')
        paloPicas.forEach(pica => pica.innerHTML = "♠")
        break;
        case 2: 
        const paloTrebol=document.querySelectorAll('.trebol')
        paloTrebol.forEach(treb => treb.innerHTML = "♣")
        break;
        case 3: 
        const paloDiamantes = document.querySelectorAll('.diamantes')
        paloDiamantes.forEach(diam => diam.innerHTML = "♦")
        break;
    }
}

