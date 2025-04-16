/*1. Crie uma função nomeada que receba um array de números e retorne a soma
de todos os elementos.
*/
function somaArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  }
console.log(somaArray([20,4,50,6]));