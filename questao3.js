function faturamento() {

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./dados.json', 'utf8'));


let menorVal = Infinity;
let maiorVal = -Infinity;
let soma = 0;

let quantidadeDiasValidos = 0;
obj.forEach(obj => {
    if (obj.valor > 0) {
        if (obj.valor < menorVal) {
            menorVal = obj.valor;
        }

        if (obj.valor > maiorVal) {
            maiorVal = obj.valor;
        }
        soma += obj.valor
        quantidadeDiasValidos++;
    }
});

let media = soma/quantidadeDiasValidos
let faturamentosAcimaMedia = 0;
obj.forEach(obj => {
        if (obj.valor > 0 && obj.valor > media) {
            faturamentosAcimaMedia++;
        } 
    }
);

console.log("O menor valor de faturamento ocorrido em um dia do mês: " + menorVal);
console.log("O maior valor de faturamento ocorrido em um dia do mês: " + maiorVal);
console.log("Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: " + faturamentosAcimaMedia);

}

module.exports = { faturamento };