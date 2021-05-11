const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

const teste = {
    top: true,
    tipo: 'teste'
}

fs.writeFile('./arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Oh yeah!');
})

fs.writeFile('./umTesteTop.json', JSON.stringify(teste), err => {
    console.log(err || 'Show.');
})