/*6. Crie um objeto com métodos internos que manipulem suas propriedades. */
const inMethods={
     value:10,
     more_3(){
        return `${this.value+3}`
     },
     less_5(){
        return `${this.value-5}`
     }
}
console.log(inMethods.more_3()+" e "+inMethods.less_5());