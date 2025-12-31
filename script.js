let resultado = document.getElementById("resultado")
let num = document.getElementsByClassName("num")
let operadores = document.getElementsByClassName("operadores")




let numero1;
let numero2;

for (let i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function () {
        let numeroClicado = num[i].textContent

        if (numeroClicado === ".") {

            if (resultado.innerText.includes(".")) {
                return
            }

            if (resultado.innerText === "0") {
                resultado.innerText = "0."
                return
            }

            resultado.innerText += "."
            return
        }

        if (resultado.innerText.length >= 12) {
            return
        }

        if (resultado.innerText === "0") {
            resultado.innerText = numeroClicado
        } else {
            resultado.innerText = resultado.innerText + numeroClicado
        }





    })

}



let operador;

for (let i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener("click", function () {

        let operadorClicado = operadores[i].textContent

        if (["+", "-", "X", "/"].includes(operadorClicado)) {
            operador = operadorClicado
            numero1 = resultado.innerText
            resultado.innerText = '0'
        }


        if (operadorClicado === "=") {



            // Se não tiver operador, não faz nada
            if (!operador) return;

            numero2 = resultado.innerText;

            // Se o usuário apertou "=" sem digitar o segundo número
            if (numero2 === "" || numero2 === "0") {
                numero2 = numero1;
            }
            numero1 = Number(numero1)
            numero2 = Number(numero2)

            let conta

            if (operador === "+") {
                conta = numero1 + numero2
            } else if (operador === "-") {
                conta = numero1 - numero2
            } else if (operador === "X") {
                conta = numero1 * numero2
            } else if (operador === "/") {
                conta = numero1 / numero2
            }

            let resultadoFinal = String(conta).slice(0, 12)
            resultado.innerText = resultadoFinal

            if (numero1 == "" || numero2 == "" || conta == "") {
                resultado.innerText = "0"
            }


            console.log(numero2)
            console.log(conta)
        }


        if (operadorClicado === "CE") {
            resultado.innerText = '0'
            numero1 = ''
            numero2 = ''
            operador = ''
        }





        console.log(operador)
        console.log(numero1)

    })

}




