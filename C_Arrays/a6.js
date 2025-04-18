/*6. Crie um array de objectos e use .some() para verificar se algum deles atende a uma 
condição. */
const PROFESSOR=[
    {nome:"Maud",disciplina:"Inglês"},
    {nome:"Esperança",disciplina:"Análise de Dados"},
    {nome:"Isa",disciplina:"Programação Web"},
    {nome:"Graça",disciplina:"Design Canva"},
    {nome:"Dulce",disciplina:"Design Figma"}
];
const qualDisciplina=PROFESSOR.some(prof=>prof.disciplina=="Inglês");
console.log(qualDisciplina);