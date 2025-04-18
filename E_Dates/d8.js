//8. Converta um timestamp (milissegundos) para uma data legível
const timestamp = 1712345678000;
const novaData = new Date(timestamp);

const data = novaData.getDate();
const mes = novaData.getMonth();
const ano = novaData.getFullYear();
const dataStamped = data + "/" + (1 + mes) + "/" + ano;

console.log(dataStamped);