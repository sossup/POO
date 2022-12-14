//Apartir deste commit sera adicionado o arquivo organizandoClassPai e este arquivo 'Veiculo' caira em desuso 
//motivo estara em README.md

export class Veiculo {
    #marca;
    #porta;
    #motor;
    #roda;
    #cor;
    #ladoVolante;
    constructor(marca, porta, motor = true, roda, cor, ladoVolante){
        this.#marca = marca;
        this.#porta = porta;
        this.#motor = motor;
        this.#roda = roda;
        this.#cor = cor;
        this.#ladoVolante = ladoVolante;
    }

    get marca(){
        return this.#marca
    }

    get porta(){
        return this.#porta
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

    get ladoVolante(){
        return this.#ladoVolante
    }

    // exibirInfos() {
    //     const marca = this.#marca;
    //     const cor = this.#cor;
    //     const volante = this.#ladoVolante;
    //     console.log(`marca:${marca}, cor:${cor} e o volante esta na ${volante}`);
    //  }
}
