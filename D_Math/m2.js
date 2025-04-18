/*2. Encontre o maior e o menor número dentro de um array usando Math.max() e 
Math.min(). */
const NUMEROS=[12,35,67,3,79,2];
const minimo=Math.min(...NUMEROS);
const maximo=Math.max(...NUMEROS);
console.log("O mínimo é "+minimo);
console.log("O máximo é "+maximo);