const { usuarios } = require("../dados/usuarios");
const { criarResposta } = require("../utils/criarRespostas")

function ordemID(arrUsuarios) {
    let copiaUsuarios = [...arrUsuarios];
    const listaOrdenada = copiaUsuarios.sort((a, b) => a.id - b.id);

    return criarResposta({
        status: true, 
        code: 200, 
        message: 'Lista ordenada por ID', 
        data: listaOrdenada
    });
}

function ordemAlfabetica(arrUsuarios) {
    let copiaUsuarios = [...arrUsuarios];
    const listaOrdenada = copiaUsuarios.sort((a, b) => a.nome.localeCompare(b.nome));

    return criarResposta({
        status: true, 
        code: 200, 
        message: 'Lista ordenada alfabeticamente', 
        data: listaOrdenada
    });
}

module.exports = {
    ordemID,
    ordemAlfabetica
}