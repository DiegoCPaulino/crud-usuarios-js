const { campoObrigatorio } = require("../utils/campoObrigatorio")
const { criarResposta } = require("../utils/criarRespostas")

const ERROS_DATA_NASC = {
    FORMATO_INVALIDO: 'DATA_NASC_FORMATO_INVALIDO',
    INEXISTENTE: 'DATA_NASC_INEXISTENTE',
    FUTURA: 'DATA_NASC_FUTURA',
    IDADE_INVALIDA: 'DATA_NASC_IDADE_INVALIDA',
    CAMPO_OBRIGATORIO: 'DATA_NASC_OBRIGATORIA'
};

function validaDataNasc(dataNasc) {
    if (!campoObrigatorio(dataNasc)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_DATA_NASC.CAMPO_OBRIGATORIO
        });
    }
    if (!verificaFormato(dataNasc)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_DATA_NASC.FORMATO_INVALIDO
        });
    }
    if (!verificaDataExistente(dataNasc)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_DATA_NASC.INEXISTENTE
        });
    }
    if (!dataNaoFutura(dataNasc)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_DATA_NASC.FUTURA
        });
    }
    if (!limiteIdade(dataNasc)) {
        return criarResposta({
            status: false,
            code: 400,
            message: ERROS_DATA_NASC.IDADE_INVALIDA
        });
    }

    return criarResposta({
        status: true,
        code: 200,
        message: null
    });
}

function verificaFormato(dataNasc) {
    return /^\d{2}\/\d{2}\/\d{4}$/.test(dataNasc)
}

function verificaDataExistente(dataNasc) {
    const [dia, mes, ano] = converteData(dataNasc);

    if (!validaMes(mes)) return false;
    if (!validaDia(dia)) return false;

    const meses30Dias = [4, 6, 9, 11];

    if (mes === 2) {
        if (anoBissexto(ano)) {
            return dia <= 29;
        } else {
            return dia <= 28;
        }
    }

    if (meses30Dias.includes(mes)) {
        return dia <= 30;
    }

    return dia <= 31;
}

function validaMes(mes) {
    return mes >= 1 && mes <= 12;
}

function validaDia(dia) {
    return dia >= 1 && dia <= 31;
}

function anoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

function dataNaoFutura(dataNasc) {
    const dataConvertida = converteData(dataNasc);
    const dataMesAjustado = ajustaMesParaJS(dataConvertida);

    const [dia, mes, ano] = dataMesAjustado;

    const dataAtual = new Date();
    const dataNascFinal = new Date(ano, mes, dia);

    return dataNascFinal <= dataAtual;
}

function converteData(dataNasc) {
    return dataNasc.split('/').map(Number);
}

function ajustaMesParaJS(arrDataNasc) {
    const copiaArr = [...arrDataNasc];
    copiaArr[1] = copiaArr[1] - 1;
    return copiaArr;
}

function limiteIdade(dataNasc) {
    const idade = calculaIdade(dataNasc);
    return idade >= 18 && idade <= 110;
}

function calculaIdade(dataNasc) {
    const [diaNasc, mesNasc, anoNasc] = converteData(dataNasc);

    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();

    let idade = anoAtual - anoNasc;

    const naoFezAniversario =
        mesAtual < mesNasc ||
        (mesAtual === mesNasc && diaAtual < diaNasc);

    if (naoFezAniversario) {
        idade--;
    }

    return idade;
}

module.exports = {
    validaDataNasc,
    ERROS_DATA_NASC
}