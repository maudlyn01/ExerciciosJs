//3. Crie um objeto aluno com nome, notas (array) e um método calcularMedia().
const ALUNO = {
    nome: "Maud",
    notas: [12, 15, 18],
    calcularMedia() {
        return `${this.nome} ${this.notas}`;

    }
};
console.log(ALUNO.calcularMedia());