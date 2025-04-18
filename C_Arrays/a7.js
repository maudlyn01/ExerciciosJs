/*7. Crie um array de objectos e use .every() para verificar se todos atendem a uma 
condição */
const PROFESSOR=[
    {nome:"Maud",disciplina:"Java"},
    {nome:"Esperança",disciplina:"Java"},
    {nome:"Isa",disciplina:"Java"},
    {nome:"Graça",disciplina:"Java"},
    {nome:"Dulce",disciplina:"Java"}
];
const mesmaDisciplina=PROFESSOR.every(prof=>prof.disciplina=="Java");
console.log(mesmaDisciplina);