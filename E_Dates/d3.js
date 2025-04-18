//3. Formate uma data no padrão DD/MM/AAAA.
const ACTUAL = new Date();
const dataActual = ACTUAL.getDate();
const mesActual = ACTUAL.getMonth();
const anoActual = ACTUAL.getFullYear();
const dataPadrao = dataActual + "/" + (1 + mesActual) + "/" + anoActual;

console.log(dataPadrao);