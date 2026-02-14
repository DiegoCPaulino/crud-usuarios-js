const { testar } = require("../../src/utils/testar");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { validaDataNasc, ERROS_DATA_NASC } = require("../../src/validacoes/dataNasc");

console.log("===== INÍCIO DOS TESTES DE DATA DE NASCIMENTO =====");

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

testar(
    'Data de nascimento vazia',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.CAMPO_OBRIGATORIO,
        data: null
    }),
    validaDataNasc('')
);

testar(
    'Data de nascimento apenas com espaços',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.CAMPO_OBRIGATORIO,
        data: null
    }),
    validaDataNasc('   ')
);

testar(
    'Data com formato inválido (hífens)',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.FORMATO_INVALIDO,
        data: null
    }),
    validaDataNasc('13-03-2004')
);

testar(
    'Data inexistente (31 de fevereiro)',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.INEXISTENTE,
        data: null
    }),
    validaDataNasc('31/02/2020')
);

testar(
    'Data inexistente (29/02 em ano não bissexto)',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.INEXISTENTE,
        data: null
    }),
    validaDataNasc('29/02/2019')
);

testar(
    'Data inexistente (31/04)',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.INEXISTENTE,
        data: null
    }),
    validaDataNasc('31/04/2021')
);

testar(
    'Data com idade menor que 18 anos',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.IDADE_INVALIDA,
        data: null
    }),
    validaDataNasc('13/03/2010')
);

testar(
    'Data com idade maior que 110 anos',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.IDADE_INVALIDA,
        data: null
    }),
    validaDataNasc('01/01/1900')
);

testar(
    'Data null',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.CAMPO_OBRIGATORIO,
        data: null
    }),
    validaDataNasc(null)
);

testar(
    'Data undefined',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.CAMPO_OBRIGATORIO,
        data: null
    }),
    validaDataNasc(undefined)
);

testar(
    'Data como número',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.CAMPO_OBRIGATORIO,
        data: null
    }),
    validaDataNasc(13032004)
);

console.log("===== FIM DOS TESTES DE DATA DE NASCIMENTO =====");