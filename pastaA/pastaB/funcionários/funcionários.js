const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = element => element.pais === 'China';
const mulheres = element => element.genero === 'F';
const menorSalario = (func, funcAtual) => funcAtual.salario < func.salario ? funcAtual : func;

axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario).nome);
})

