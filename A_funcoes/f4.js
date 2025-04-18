/*4. Crie uma função que recebe um número e retorna true se for primo e false caso 
contrário.*/
function eprimo(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    let impar = 3;

    while (impar * impar <= num) {
        if (num % impar === 0) return false;
        impar = impar + 2;
    }
    return true;

}
console.log(eprimo(18));