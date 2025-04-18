//2. Filtre os números ímpares de um array usando .filter()
function impares (array) {
    return array.filter(num => num % 2 !== 0);
  }
  let imparesfiltrados=impares([1,2,3,4,5,6,7,8]);
console.log(imparesfiltrados);
