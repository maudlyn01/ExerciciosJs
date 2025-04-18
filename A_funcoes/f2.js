//2. Crie uma arrow function que receba um número e retorne seu fatorial.
const fatorial = (num) => {
  if (num === 0 || num === 1) return 1;//estou verificar se n é 0 ou 1, pois nesses casos o fatorial é 1
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
};
console.log(fatorial(6));