/*8. Crie uma função que mescle dois objetos e retorne um novo objeto com todas
as propriedades. */

 const CAR={
    marca:"Mazda",
    modelo:"Demio",
    ano:2016
};
const INSIDE_CAR={
    kilometer:"250km/h"

}; 
function merge(){
    const MERGE = { ...CAR, ...INSIDE_CAR }
    return MERGE;

}
console.log(merge());