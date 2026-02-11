const { testar } = require("../../src/utils/testar");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { validaNome, ERROS_NOME } = require("../../src/validacoes/nome");

testar(
    'Nome válido simples',
    criarResposta({
        status: true,
        code: 200,
        message: null
    }),
    validaNome('Diego')
);

testar(
    'Nome válido com espaços extras (normalização)',
    criarResposta({
        status: true,
        code: 200,
        message: null
    }),
    validaNome('   Diego    Paulino   ')
);

testar(
    'Nome vazio',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.CAMPO_OBRIGATORIO
    }),
    validaNome('')
);

testar(
    'Nome com menos de 2 caracteres',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.TAMANHO_INVALIDO
    }),
    validaNome('D')
);

testar(
    'Nome com mais de 100 caracteres',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.TAMANHO_INVALIDO
    }),
    validaNome('A'.repeat(101))
);

testar(
    'Nome com caracteres inválidos (números)',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.CARACTERES_INVALIDOS
    }),
    validaNome('Diego123')
);

testar(
    'Nome com caracteres inválidos (símbolos)',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.CARACTERES_INVALIDOS
    }),
    validaNome('Diego@Paulino')
);

testar(
    'Nome válido com acentuação e hífen',
    criarResposta({
        status: true,
        code: 200,
        message: null
    }),
    validaNome('João Pedro-Silva')
);
