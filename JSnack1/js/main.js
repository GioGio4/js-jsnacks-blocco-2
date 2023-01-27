// TRACCIA
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.



// INSERIRE UN NUMERO
const user_number_el = document.getElementById("user_number");
const submit_btn_el = document.getElementById("submit-btn");
const msg_outpout = document.getElementById("print-number");
// console.log(user_number_el);
// console.log(submit_btn_el);


submit_btn_el.addEventListener(
    "click",
    function () {

        let user_number_sub = parseInt(user_number_el.value);
        console.log(user_number_sub);


        // SE il numero è pari stampa il numero
        if (user_number_sub % 2 == 0) {
            msg_outpout.innerHTML = (user_number_sub);
            console.log(typeof user_number_sub)
        }

        // ALTRIMENTI (se dispari) stampa il numero successivo  (numero dispari + 1)
        else {
            msg_outpout.innerHTML = (user_number_sub + 1);
        }
    }
)



