//4. Adicione 7 dias à data actual.
const ACTUAL = new Date();
const novaData = new Date();
novaData.setDate(ACTUAL.getDate() + 7);

const data = novaData.getDate();
const mes = novaData.getMonth();
const ano = novaData.getFullYear();
const dataMais_7 = data + "/" + (1 + mes) + "/" + ano;

console.log(dataMais_7);