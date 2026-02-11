const { testar } = require("../../src/utils/testar");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { atualizaNomeUsuario } = require("../../src/servicos/atualizaNomeUsuario");
const { ERROS_NOME } = require("../../src/validacoes/nome");

testar(
    'Atualização de nome com sucesso',
    criarResposta({
        status: true,
        code: 200,
        message: 'Nome atualizado com sucesso'
    }),
    atualizaNomeUsuario(1, 'Novo Nome')
);

testar(
    'Usuário não encontrado',
    criarResposta({
        status: false,
        code: 404,
        message: 'USUARIO_NAO_ENCONTRADO'
    }),
    atualizaNomeUsuario(9999, 'Qualquer Nome')
);

testar(
    'Novo nome inválido - campo obrigatório',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.CAMPO_OBRIGATORIO
    }),
    atualizaNomeUsuario(1, '')
);

testar(
    'Novo nome inválido - tamanho menor que permitido',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.TAMANHO_INVALIDO
    }),
    atualizaNomeUsuario(1, 'A')
);

testar(
    'Novo nome inválido - caracteres inválidos',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.CARACTERES_INVALIDOS
    }),
    atualizaNomeUsuario(1, 'Nome123')
);

testar(
    'Novo nome válido com acentuação',
    criarResposta({
        status: true,
        code: 200,
        message: 'Nome atualizado com sucesso'
    }),
    atualizaNomeUsuario(1, 'João da Silva')
);
