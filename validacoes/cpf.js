const { campoObrigatorio } = require("../utils/campoObrigatorio")
const { criarResposta } = require("../utils/criarRespostas")

const ERROS_CPF = {
    TAMANHO_INVALIDO: 'CPF_TAMANHO_INVALIDO',
    DIGITOS_REPETIDOS: 'CPF_DIGITOS_REPETIDOS',
    DIGITOS_INVALIDOS: 'CPF_DIGITOS_INVALIDOS',
    CAMPO_OBRIGATORIO: 'CPF_OBRIGATORIO'
};

function validaCPF(cpf) {
    if (!campoObrigatorio(cpf)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_CPF.CAMPO_OBRIGATORIO
        });
    }

    cpf = cpf.replace(/\D/g, "");

    if (!verificaTamanhoValido(cpf)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_CPF.TAMANHO_INVALIDO
        });
    }
    if (verificaDigitosRepetidos(cpf)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_CPF.DIGITOS_REPETIDOS
        });
    }
    if (!validaVerificadores(cpf)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_CPF.DIGITOS_INVALIDOS
        });
    }

    return criarResposta({
        status: true,
        code: 200,
        message: null
    });
}

function verificaTamanhoValido(cpf) {
    return cpf.length === 11;
}

function verificaDigitosRepetidos(cpf) {
    return new Set(cpf).size === 1;
}

function validaVerificadores(cpf) {
    const calcularDigito = (cpf, pesoInicial) => {
        let soma = 0;
        for (let i = 0; i < pesoInicial - 1; i++) {
            soma += Number(cpf[i]) * (pesoInicial - i);
        }
        const digito = (soma * 10) % 11;
        return digito === 10 ? 0 : digito;
    };

    const digito1 = calcularDigito(cpf, 10);
    const digito2 = calcularDigito(cpf, 11);

    return digito1 === Number(cpf[9]) && digito2 === Number(cpf[10]);
}

module.exports = {
    validaCPF,
    ERROS_CPF
}