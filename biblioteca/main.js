import Livro from './livro.js';

import Estudante from './estudante.js';

let livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, true);
let livro2 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997, true);
let livro3 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, true);


let estudante1 = new Estudante("Maria", 2);

console.log("menu");
console.log("1 - Pegar livro");
console.log("2 - Devolver livro");
console.log("3 - Informações");
let sc = 0;
while(sc != 4) {
    console.log("menu");
    console.log("1 - Pegar livro");
    console.log("2 - Devolver livro");
    console.log("3 - Informações");
    console.log("4 - Sair");

    sc = Number(prompt("Escolha uma opção: "));  
    if(sc == 1) {
        let livroEscolhido = Number(prompt("Escolha um livro (1, 2, ou 3): "));
        if(livroEscolhido == 1) {
            estudante1.pegarLivro(livro1);
        } else if(livroEscolhido == 2) {
            estudante1.pegarLivro(livro2);
        } else if(livroEscolhido == 3) {
            estudante1.pegarLivro(livro3);
        } else {
            console.log("Livro não encontrado!");
        }
    } else if(sc == 2) {
        let livroEscolhido = Number(prompt("Escolha um livro para devolver (1, 2, ou 3): "));
        if(livroEscolhido == 1) {
            estudante1.devolver(livro1);
        } else if(livroEscolhido == 2) {
            estudante1.devolver(livro2);
        } else if(livroEscolhido == 3) {
            estudante1.devolver(livro3);
        } else {
            console.log("Livro não encontrado!");
        }
    } else if(sc == 3) {
        estudante1.informacoes();
    } else if(sc == 4) {
        console.log("Saindo do programa...");
    } else {
        console.log("Opção inválida!");
    }
}
