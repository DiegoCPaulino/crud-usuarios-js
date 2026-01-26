const { usuarios } = require("../dados/usuarios");
const { validaNome, ERROS_NOME } = require('../validacoes/nome')
const { criarResposta } = require("../utils/criarRespostas")

function atualizaNomeUsuario(id, novoNome) {
    const usuario = buscarUsuarioID(id);

    if (!usuario) {
        return criarResposta({
            status: false,
            code: 404,
            message: 'USUARIO_NAO_ENCONTRADO'
        });
    }

    const resultadoNome = validaNome(novoNome);
    
    if (!resultadoNome.status) {
        return resultadoNome;
    }

    usuario.nome = novoNome;

    return criarResposta({
        status: true,
        code: 200,
        message: 'Nome atualizado com sucesso'
    });
}

function buscarUsuarioID(id) {
    return usuarios.find(u => u.id === id) || false;
}

module.exports = {
    atualizaNomeUsuario,
    buscarUsuarioID
}