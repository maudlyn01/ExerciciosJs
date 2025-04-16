//2. Crie uma arrow function que receba um número e retorne seu fatorial.
function calcularFatorial(numero) {
    
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
  
}
console.log(calcularFatorial(5));