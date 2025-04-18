//8. Utilize .forEach() para imprimir cada item de um array no console.
const PROFESSOR=[
    {nome:"Maud",disciplina:"Inglês"},
    {nome:"Esperança",disciplina:"Análise de Dados"},
    {nome:"Isa",disciplina:"Programação Web"},
    {nome:"Graça",disciplina:"Design Canva"},
    {nome:"Dulce",disciplina:"Design Figma"}
];
PROFESSOR.forEach(function(cadaItem){
console.log(cadaItem.nome +" leciona " +cadaItem.disciplina);
});
