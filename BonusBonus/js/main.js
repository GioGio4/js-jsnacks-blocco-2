// TRACCIA 
// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte)
//  [W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.

const result = ["W", "W", "L", "X", "X", "W", "L", "X"];
console.log(result);

let win = 0
let draw = 0
let lose = 0

for (let i = 0; i < result.length; i++) {

    if (result[i] == "W") {
        win += 1;
    }

    if (result[i] == "L") {
        lose += 1;
    }

    if (result[i] == "X") {
        draw += 1;
    }
}
console.log("Le vittorie sono: " + win);
console.log("Le sconfitte sono: " + lose);
console.log("I pareggi sono: " + draw);