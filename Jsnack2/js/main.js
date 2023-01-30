// TRACCIA
// Crea due tag div con due id diversi.Un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const number = [10, 77, 42, 28, 39, 55, 99, 1, 71, 100, 59, 88];

for (let i = 0; i < number.length; i++) {

    if (number[i] % 2 == 0) {
        document.getElementById("green").append(number[i] + ", ");
    }

    else {
        document.getElementById("red").append(number[i] + ", ");
    }
}