/*3. Escreva uma função anônima que receba um array de strings e retorne a string
com mais caracteres.
*/
const stringMaisLonga = function(arr) {
    return arr.reduce((a, b) => (a.length > b.length ? a : b));
  };
  console.log(stringMaisLonga(["Cogumelo","Lanche", "Cantina"]));