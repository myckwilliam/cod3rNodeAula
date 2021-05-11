const fs = require('fs');

const caminho = './arquivoGerado.json';

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//... Assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.nome}:${config.preco}`);
})

fs.readdir(__dirname,(err, arquivos) => {
    console.log('Conteúdo da pasta.');
    console.log(arquivos.length);
})