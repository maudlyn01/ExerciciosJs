//2. Extraia o ano, mês e dia da data actual.
const ACTUAL = new Date();
const dataActual = ACTUAL.getDate();
const mesActual = ACTUAL.getMonth();
const anoActual = ACTUAL.getFullYear();

console.log(dataActual + "-" + (1 + mesActual) + "-" + anoActual);