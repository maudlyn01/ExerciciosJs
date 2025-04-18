/*3. Escreva uma função anônima que receba um array de strings e retorne a string
com mais caracteres.
*/
const biggerString = function(array) {
  let bigger = "";

  for (let i = 0; i < array.length; i++) {

    if (array[i].length > bigger.length) {
      bigger = array[i];
    }
  }

  return bigger;
};

  console.log(biggerString(["Cogumelo","Lanche", "Cantina"]));