const { usuarios, usuariosDeletados } = require("../usuarios");
const { buscarUsuarioID } = require("./atualizarUsuario")
const { formatarCPF } = require("../utils/formatacoes")
const { criarResposta } = require("../utils/criarRespostas")

function deletaPorID(id) {
    const usuario = buscarUsuarioID(id);

    if (!usuario) {
        return criarResposta({
            status: false,
            code: 404,
            message: 'USUARIO_NAO_ENCONTRADO'
        });
    }

    const index = usuarios.findIndex(u => u.id === usuario.id);

    usuarios.splice(index, 1);
    usuariosDeletados.push(usuario);

    return criarResposta({
        status: true, 
        code: 200,
        message: 'Usuário deletado com sucesso'
    });
}

function deletaPorCPF(cpf) {
    const usuario = buscarUsuarioCPF(cpf);

    if (!usuario) {
        return criarResposta({
            status: false,
            code: 404,
            message: 'USUARIO_NAO_ENCONTRADO'
        });
    }

    const index = usuarios.findIndex(u => u.cpf === usuario.cpf);

    usuarios.splice(index, 1);
    usuariosDeletados.push(usuario);

    return criarResposta({
        status: true, 
        code: 200,
        message: 'Usuário deletado com sucesso'
    });
}

function buscarUsuarioCPF(cpf) {
    cpf = formatarCPF(cpf)
    return usuarios.find(u => u.cpf === cpf) || false;
}

module.exports = {
    deletaPorID,
    deletaPorCPF,
    buscarUsuarioCPF
}