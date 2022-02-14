let cartas = [];// inicializo como variables globales aquellos valores que necesito acceder en la funcion de mostrar y de ordenar
let carta = {};
const valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const mostrar = (arr) => {
    arr.map((card, index) => {
        let cardValor = card.valor;
        switch (card.valor) {//Creo una variable para el renderizado de valores que son letras.
            case 1:
                cardValor = 'A';
                break;
            case 11:
                cardValor = 'J';
                break;
            case 12:
                cardValor = 'Q';
                break;
            case 13:
                cardValor = 'K';
                break;
        }
        document.body.innerHTML +=
            `               
        <div class="separador">  
            <div class="card-container" id='${index}'>
                <div class="card">    
                        <p class="palo ${card.palo}">
                        ${card.palo}
                        </p>
                        <p class="valor">
                        ${cardValor}
                        </p>
                        <p class="palo-inferior ${card.palo}">
                        ${card.palo}
                        </p>
                </div>
            </div>
        </div>
            `
    })
}

const handleSubmit = (event) => {
    event.preventDefault("submit")
    const palo = ["♥", "♠", "♣", "♦"]
    let nroCartas = document.querySelector('#cantidad').value
    for (let i = 0; i < nroCartas; i++) {
        let valorRandom = Math.floor(Math.random() * valor.length);
        let paloRandom = Math.floor(Math.random() * palo.length);
        carta = {
            palo: palo[paloRandom],
            valor: valor[valorRandom],
        }
        cartas.push(carta)
        document.body.innerHTML = ""
        mostrar(cartas)
    }
    document.body.innerHTML += `
        <div class="btn-ordenar">
            Ordenar
        </div>`
    const botonOrdenar = document.querySelector('.btn-ordenar')
    botonOrdenar.addEventListener("click", ordenar)
    return cartas;
}

const form = document.querySelector('.form')  //  Aca empieza el flujo del codigo
form.addEventListener("submit", handleSubmit)

const ordenar = () => {
    const botonOrdenar = document.querySelector('.btn-ordenar')
    botonOrdenar.style.display = "none"
    let contadorBurbuja = 0
    document.body.innerHTML += `
    <h1 class="orden">Bubble log:</h1>
    <p class="orden">En caso de encontrarse el mazo ordenado, no se mostraran cambios.</p>`
    for (let i = 0; i < cartas.length; i++) {
        for (let j = i + 1; j < cartas.length; j++) {
            if (cartas[i].valor > cartas[j].valor) {
                let aux = cartas[j]
                cartas[j] = cartas[i]
                cartas[i] = aux         // Al hacerse un swap, aumenta el contador de swaps y se renderiza como     va quedando el mazo temporariamente, reutilizando la funcion mostrar.
                contadorBurbuja++       
                document.body.innerHTML += 
                `<p class="contador">
                    ${contadorBurbuja}
                </p>`
                mostrar(cartas)
            }
        }
    }
}
