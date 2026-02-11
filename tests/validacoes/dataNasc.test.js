const { testar } = require("../../src/utils/testar");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { validaDataNasc, ERROS_DATA_NASC } = require("../../src/validacoes/dataNasc");
const hojeMock = new Date('2026-01-27');

testar(
    'Data de nascimento válida (formatada)',
    criarResposta({
        status: true,
        code: 200,
        message: null,
        data: null }),
    validaDataNasc('13/03/2004')
);

testar(
    'Data de nascimento válida (não formatada)',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.FORMATO_INVALIDO,
        data: null }),
    validaDataNasc('13032004')
);

testar(
    'Data de nascimento no futuro',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.FUTURA,
        data: null }),
    validaDataNasc('13/03/2100')
);