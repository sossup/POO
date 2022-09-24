import { Veiculo } from './Veiculo.js';

export class Moto extends Veiculo {
    constructor(marca, motor = true, roda, cor){
        super (marca, motor = true, roda, cor);
    }
}