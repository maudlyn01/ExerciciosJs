/*2. Adicione um método ao objeto carro que retorne uma string com suas 
informações */
const CARRO = {
    marca: "Mazda",
    modelo: "Demio",
    ano: 2016,
    infomacaoCarro() {
      return `${this.marca} ${this.modelo} (${this.ano})`;
    }
  };
  console.log(CARRO.infomacaoCarro());