const { validaNome, ERROS_NOME } = require('../validacoes/nome')
const { validaCPF, ERROS_CPF } = require('../validacoes/cpf')
const { validaDataNasc, ERROS_DATA_NASC } = require('../validacoes/dataNasc')
const { geraId } = require('../geradorId')
const { formataUsuario } = require("../utils/formatacoes")
const { usuarios } = require('../usuarios')
const { criarResposta } = require("../utils/criarRespostas")

function criaObjetoUsuario(nome, cpf, dataNasc) {
    const resultado = resultadoValidacoes(nome, cpf, dataNasc)
    
    if (!resultado.status) {
        return resultado;
    }

    const novoId = geraId();
    const novoUsuario = {id: novoId, nome: nome, cpf: cpf, dataNasc: dataNasc};

    return criarResposta({
        status: true,
        code: 201, // Created
        message: 'Usuário criado com sucesso',
        data: novoUsuario
    });
}

function cadastraUsuario(novoUsuario, arrUsuarios) {
    if (verificaCPFExistente(novoUsuario.cpf, arrUsuarios)) {
        return criarResposta({
            status: false,
            code: 400,
            message: 'CPF_EXISTENTE'
        });
    }

    const usuarioFormatado = formataUsuario(novoUsuario);
    arrUsuarios.push(usuarioFormatado)

    return criarResposta({
        status: true,
        code: 201,
        message: 'Usuário cadastrado com sucesso'
    });
}

function resultadoValidacoes(nome, cpf, dataNasc) {
    const resultadoNome = validaNome(nome);
    if (!resultadoNome.status) {
        return resultadoNome;
    }
    
    const resultadoCPF = validaCPF(cpf);
    if (!resultadoCPF.status) {
        return resultadoCPF;
    }
    
    const resultadoDataNasc = validaDataNasc(dataNasc);
    if (!resultadoDataNasc.status) {
        return resultadoDataNasc;
    }

    return criarResposta({
        status: true,
        code: 200,
        message: null
    });
}

function verificaCPFExistente(cpf, arrUsuarios) {
    return arrUsuarios.some(usuario => {
        return usuario.cpf === cpf
    });
}

module.exports = {
    criaObjetoUsuario,
    cadastraUsuario
}