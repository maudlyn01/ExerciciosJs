/*7. Crie uma função que recebe um nome e um sobrenome e retorna um objeto { 
nome, sobrenome, nomeCompleto }.*/
function dadosNome(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`;

    const completoNome={
        nome: nome,
        sobrenome: sobrenome,
        nomeCompleto: nomeCompleto
      };
      return completoNome;
}
    
console.log(dadosNome("Maud","Uate"));

