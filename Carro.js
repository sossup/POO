import { Veiculo } from './organizandoClassPai.js';

export class Carro extends Veiculo {
    #porta
    #ladoVolante
    constructor(marca, porta, motor = true, roda, cor, ladoVolante){
        super (marca, motor = true, roda, cor);
        this.#ladoVolante = ladoVolante;
        this.#porta = porta;
    }

    get ladoVolante(){
        return ladoVolante = this.#ladoVolante
    }

    get porta(){
        return porta = this.#porta
    }
}