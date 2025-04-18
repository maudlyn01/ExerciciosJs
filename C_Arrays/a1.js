//1. Crie um array de números e use .map() para dobrar cada número.
const arraynum = [2, 3, 4, 5, 6, 7];
const dobro = arraynum.map(function(num) {
  return num * 2;
});

console.log(dobro); 