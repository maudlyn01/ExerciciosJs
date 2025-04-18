/*8. Escreva uma função que recebe um array de objetos { nome, idade } e retorne o 
objeto com maior idade.*/
function maioridade(){
    const persons=[
        { nome: "Maud Ana", idade: 24 },
      { nome: "José Carlos", idade: 30 },
      { nome: "Biatriz Moela", idade: 27 }
    ];
    let maior=persons[0];
    for(let age=1;age<persons.length;age++){
        if(persons[age].idade>maior.idade){
            maior=persons[age];
        }
    }
return maior;
}
console.log(maioridade());