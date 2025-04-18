//4. Use Object.keys() para listar todas as chaves de um objeto qualquer.
const CARRO={
    marca:"Mazda",
    modelo:"Demio",
    ano:2016
};
const key = Object.keys(CARRO);// object.keys vai seleccionar todas as propriedades do objecto "carro" e apresentar como um array
console.log(key);