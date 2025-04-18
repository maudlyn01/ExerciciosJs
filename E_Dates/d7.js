//7. Calcule a diferença em dias entre duas datas.
const data1=new Date(2025,4,30);
const data2=new Date(2025,4,17);
const difData=data1-data2;// calcula  em milissegundo
//conversao para dia
//1s-1000ms | 1min-60s| 1h-60min| 1dia-24h(ms*s*min*h=86.400.000ms por dia)
const ms_dia=1000*60*60*24;
const dif_entre_data=difData/ms_dia;

console.log("A diferença entre as datas é de "+dif_entre_data+" dias");