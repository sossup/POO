<h1>Ola, este é um repositorio com meus estudos de POO em JS</h1>
Orientação a Objetos em JS

<h2>Veiculo.js</h2>
você encontrara uma class privada chamada Veiculo, o '#' na frente das propriedades mostra que ela não pode ser alterada depois de ser definida pela primeira vez (caso ela PRECISE ser alterada deve ser usado | set( ){ } | para alterar em uma class filho)
<p></p>
<p></p>
as propriedades definidas são propriedades relevantes de um veiculo seja moto ou carro.
<p></p>
<p></p>
É em constructor que sera alocada as propriedades e funções, uma classe pode ter apenas funções ou apenas propriedades ou os dois(se as proprieades forem privadas elas devem ser citadas antes de constructor com '#' na frente)
<p></p>
<p></p>
O parametro 'get' serve para retirar uma propriedade da class para ser usado em outro lugar por exemplo em uma class filho (deve tentar ao maximo criar um 'get' por propriedade para que quando seja necessario chamar o parametro ele faça apenas uma coisa e seja legivel)
<p></p>
<p></p>
<h4>Outra forma de retirar os parametros pra fora de uma class privada é criar a seguinte função:</h4>
<p></p>

```
#montaObjUser() {
  return {
    marca: this.#marca,
    porta: this.#porta,
    motor: this.#motor,
    roda: this.#roda,
    cor: this.#cor,
    ladoVolante; this.#ladoVolante
  };
}
```

Caso precise mostrar os valores das propriedades da classe recomendo utilizar uma função dentro da propria class exemplo:

```
exibirInfos() {
   const marca = this.#marca);
   const cor = this.#cor
   return `${marca},${cor}`;
}
```
E em exibir.js colocar

```
const novoCarro = new Carro('ford','5','','4','verde','direita');
console.log(novoCarro.marca);
console.log(novoCarro.exibirInfos())
```

Por ultimo podemos ainda definir uma interface que seta qual tipo o valor deve ter por exemplo a data deve ser um number, o nome deve ser umas string, etc.

```
interface User {
  nome: string;
  sobrenome: string;
  nomeCompleto(): string;
}
```
