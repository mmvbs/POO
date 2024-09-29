import usuario from './usuario.js';
export default class Estudante extends usuario{
    constructor(nome, limite){
        super(nome);
        this.limite = limite;
    }
    pegarLivro(livro){
        if(this.livros.length < this.limite){
            this.livros.push(livro);
            console.log("Livro adicionado à lista de livros do estudante!");
        }else{
            console.log("Limite de livros atingido")
        }
    }
    devolver(livro){
        livro.devolver();
    }
    informacoes(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Limite de livros: ${this.limite}`);
        console.log("Livros: ");
        for(let i=0; i<this.livros.length; i++){
            console.log(`Livro ${i+1}:`);
            this.livros[i].informacoes();
        }
    }
}