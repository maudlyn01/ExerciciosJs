//3. Some todos os números de um array usando .reduce().

//Nao entendi ,muito bem o reduce porem vi alguns exemplos e a explicacao documentadas no mdn
const array=[1,2,3,4,5,6,7,8,9];
const valInicial=0;
const soma=array.reduce(
    (acumulador,valActual) => acumulador+valActual,valInicial);
console.log(soma);