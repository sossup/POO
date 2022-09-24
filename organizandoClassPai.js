export class Veiculo {
    #marca;
    #motor;
    #roda;
    #cor;
    constructor(marca, motor = true, roda, cor){
        this.#marca = marca;  
        this.#motor = motor;
        this.#roda = roda;
        this.#cor = cor;
    }

    get marca(){
        return this.#marca
    }
    
    get motor(){
        return this.#motor
    }

    get roda(){
        return this.#roda
    }

    get cor(){
        return this.#cor
    }
}
