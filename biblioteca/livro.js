export default class Livro{
    constructor(titulo, autor, ano, disponivel){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.disponivel = disponivel;
    }
    pegar(){
        if(this.disponivel){
            this.disponivel = false;
            console.log("Livro emprestado com sucesso!");
            return true;
        }
        console.log("Livro indisponível!");
        return false;
    }
    devolver(){
        this.disponivel = true;
        console.log("Livro devolvido com sucesso!");
    }
    informacoes(){
        console.log(`Título: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Disponível: ${this.disponivel}`);
    }
}