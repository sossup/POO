import { Veiculo } from './Veiculo.js';

export class Carro extends Veiculo {
    constructor(marca, porta, motor = true, roda, cor, ladoVolante){
        super (marca, porta, motor = true, roda, cor, ladoVolante,);
    }
}