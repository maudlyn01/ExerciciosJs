/*1. Crie uma função nomeada que receba um array de números e retorne a soma
de todos os elementos.
*/

function sumNum(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log(sumNum([20, 4, 50, 6]));