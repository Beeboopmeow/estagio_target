function porcentagens() {

    const data = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    }

    let soma = 0;

    Object.values(data).forEach(valor => soma += valor);

    for (const [chave, valor] of Object.entries(data)) {
        console.log(`${chave}:`, `${((valor/soma)*100).toFixed(2)}%`);
    }
}

module.exports = { porcentagens };