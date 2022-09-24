//herdar propriedade de user para admin
Object.setPrototypeOf(admin, user);
admin.criarCurso();  //funçao de admin
admin.exibirInfo();  //funçao de user 

//herdar com class
//Carro ira herdar as propriedades de Veiculo
class Carro extends Veiculo {
    constructor(){}
}