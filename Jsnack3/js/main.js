// TRACCIA
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari

//  Array contenente NUMERI INTERI

const numeri = [10, 77, 42, 28, 39, 55, 99, 1]
const number_added = document.getElementById("added-number")
let addition = 0;

// Fare la somma di tutti elementi che sono in POSIZIONE DISPARI

//  Creare un ciclo che va ad individuare elementi in posizione dispari e stampa la somma.

for (let i = 0; i < numeri.length; i++) {

    if (i % 2 == !0) {

        console.log(numeri[i])
        addition += numeri[i]

    }
}

number_added.innerHTML = (addition);