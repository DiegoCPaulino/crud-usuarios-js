let ultimoIdGerado = 4;

function geraId() {
    ultimoIdGerado++
    return ultimoIdGerado;
}

module.exports = {
    geraId
}