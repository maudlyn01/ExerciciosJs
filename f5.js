/*5. Implemente uma função que recebe um número e retorna uma função que 
adiciona esse número a outro número passado posteriormente.*/
function numeroSoma(num1) {

    return function (num2) {
        return num1 + num2;

    };
}
const soma_4 = numeroSoma(4);

console.log(soma_4(5));