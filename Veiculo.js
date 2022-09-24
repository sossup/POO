export class Veiculo {
    #marca;
    #porta;
    #motor;
    #roda;
    #cor;
    #ladoVolante
    constructor(marca, porta, motor = true, roda, cor, ladoVolante){
        this.#marca = marca;
        this.#porta = porta;
        this.#motor = motor;
        this.#roda = roda;
        this.#cor = cor;
        this.#ladoVolante = ladoVolante
    }

    get marca(){
        return this.#marca
    }

    get porta(){
        return this.#porta
    }

    get roda(){
        return this.#roda
    }

    get cor(){
        return this.#cor
    }

    get ladoVolante(){
        return this.#ladoVolante
    }
}
