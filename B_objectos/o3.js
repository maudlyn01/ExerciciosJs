//3. Crie um objeto aluno com nome, notas (array) e um método calcularMedia().
const ALUNO = {
    nome: "Maud",
    notas: [12, 15, 18],
    calcularMedia() {
        

        let soma=0;
        for( let i=0; i<this.notas.length;i++){
            
           soma= soma+this.notas[i];
        } 
        let media=soma/this.notas.length;
        return `A media de  ${this.nome} é ${media}`;

    }
};
console.log(ALUNO.calcularMedia());