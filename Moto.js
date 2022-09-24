import { Veiculo } from './organizandoClassPai.js';

export class Moto extends Veiculo {
    #cilindrada

    constructor(marca, motor = true, roda, cor, cilindrada){
        super (marca, motor = true, roda, cor);
        this.#cilindrada = cilindrada;

    }

    get cilindrada(){
        return cilindrada = this.#cilindrada
    }
}