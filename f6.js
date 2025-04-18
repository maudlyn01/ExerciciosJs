//6. Criae uma função que filtre números pares de um array.
function filtraPares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) continue;
            pares.push(array[i]);
        
    }
    return pares;
}
console.log(filtraPares([11, 22, 33, 34, 25, 26, 47, 96, 170]));