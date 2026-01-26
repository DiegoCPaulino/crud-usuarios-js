const { campoObrigatorio } = require("../utils/campoObrigatorio")
const { criarResposta } = require("../utils/criarRespostas")

const ERROS_NOME = {
    CAMPO_OBRIGATORIO: 'NOME_OBRIGATORIO',
    TAMANHO_INVALIDO: 'NOME_TAMANHO_INVALIDO',
    CARACTERES_INVALIDOS: 'NOME_CARACTERES_INVALIDOS'
};

function validaNome(nome) {
    if (!campoObrigatorio(nome)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_NOME.CAMPO_OBRIGATORIO
        });
    }

    const nomeNormalizado = normalizaNome(nome);

    if (!nomeMinMax(nomeNormalizado)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_NOME.TAMANHO_INVALIDO
        });
    }
    if (!caracteresPermitidos(nomeNormalizado)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_NOME.CARACTERES_INVALIDOS
        });
    }

    return criarResposta({
        status: true,
        code: 200,
        message: null
    });
}

function normalizaNome(nome) {
    return nome.trim().replace(/\s+/g, ' ');
}

function nomeMinMax(nome) {
    return nome.length >= 2 && nome.length <= 100
}

function caracteresPermitidos(nome) {
    const regexNome = /^[A-Za-zÀ-ÿ\s'-]+$/;
    return regexNome.test(nome);
}

module.exports = {
    validaNome,
    ERROS_NOME
}