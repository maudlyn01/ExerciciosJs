//6. Converta um ângulo de graus para radianos e vice-versa usando Math.PI.
let graus=180;
let radianos=2;
const RADIANOS=graus * (Math.PI / 180);
const GRAUS=radianos * (180 / Math.PI);

console.log("Ao converter de "+radianos+" rad para graus fica "+ GRAUS.toFixed(2)+" graus");
console.log("Ao converter de "+graus+" graus para graus fica "+ RADIANOS.toFixed(2)+" radianos");