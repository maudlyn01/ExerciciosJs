//6. Verifique qual dia da semana caiu uma data específica.
const dataEspecifica=new Date(2025,4,17);
const dia_da_semana=[
    "Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"
];

const diaSemana=dia_da_semana[dataEspecifica.getDay()-1];
console.log("O dia da semana para a data "+dataEspecifica+" é "+ diaSemana);