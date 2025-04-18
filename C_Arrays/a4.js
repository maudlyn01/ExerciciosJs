//4. Ordene um array de números em ordem crescente e decrescente usando .sort().
const NUMEROS=[4,2,6,2,7,1,0];
const CRESCENTE=[...NUMEROS].sort((a,b)=>a-b);
const DECRESCENTE=[...NUMEROS].sort((a,b)=>b-a);

console.log("É crescente =>"+ CRESCENTE +" \nÉ decrescente =>" +DECRESCENTE)