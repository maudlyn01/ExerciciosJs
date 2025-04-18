/*5. Use Object.values() para listar todos os valores de um objeto qualquer. */
const CARRO={
    marca:"Mazda",
    modelo:"Demio",
    ano:2016
};
const value = Object.values(CARRO);// object.values vai seleccionar todos os valores do objecto "carro" e apresentar como um array
console.log(value);