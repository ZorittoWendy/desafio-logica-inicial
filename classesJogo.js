class Heroi {
   constructor(nome, idade, tipo, poder){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
	this.poder = poder;
   }
   saudacao(){
        console.log(`O ${this.tipo} atacou usando ${this.poder}`)
   }

}

let personagem = new Heroi("Fulano", 23, "Mago", "magia")
personagem.saudacao()

let personagem1 = new Heroi("Siclano", 44, "Guerreiro", "espada")
personagem1.saudacao()

let personagem2 = new Heroi("Beltrano", 100, "Monge", "artes marcias")
personagem2.saudacao()

let personagem3 = new Heroi("Ferdinando", 30, "Ninja", "shuriken")
personagem3.saudacao()


