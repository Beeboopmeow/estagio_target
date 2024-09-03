const prompt = require('prompt-sync')();

function inverter(str) {
    let resultado = "";

    for(let i = str.length - 1; i >= 0; i--) { 
        resultado += str[i];
    }

    return resultado;
}

function inverterPalavra() {
    let p = prompt('Digite uma palavra: ');
    console.log(inverter(p));
}

module.exports = { inverterPalavra };