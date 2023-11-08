//atribuição por desestruturação: Objetos 
const pessoa = {
    nome: 'Willian',
    sobrenome: 'Menezes',
    idade: 26,
    endereco: {
        rua: 'Rua Vitorino Alves',
        numero: 38
    }
};

const {nome} = pessoa;
console.log(nome);