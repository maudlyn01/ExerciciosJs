//10.Gere um número aleatório entre 1 e 6, simulando o lançamento de um dado.
const MIN=1;
const MAX=6;
const aleatorio = Math.round(Math.random()*(MAX-MIN)+MIN);
console.log(aleatorio);