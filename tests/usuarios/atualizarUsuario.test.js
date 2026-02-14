const { testar } = require("../../src/utils/testar");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { atualizaNomeUsuario } = require("../../src/usuarios/atualizarUsuario");
const { ERROS_NOME } = require("../../src/validacoes/nome");
const { usuarios } = require("../../src/dados/usuarios");

const usuarioOriginal = { ...usuarios[0] };

console.log("===== INÍCIO DOS TESTES DE ATUALIZAÇÃO DE USUÁRIO =====");

testar(
    'Atualizar nome de usuário existente com nome válido',
    criarResposta({
        status: true,
        code: 200,
        message: 'Nome atualizado com sucesso',
        data: null
    }),
    atualizaNomeUsuario(usuarioOriginal.id, 'Nome Atualizado')
);

testar(
    'Atualizar nome de usuário inexistente',
    criarResposta({
        status: false,
        code: 404,
        message: 'USUARIO_NAO_ENCONTRADO',
        data: null
    }),
    atualizaNomeUsuario(99999, 'Novo Nome')
);

testar(
    'Atualizar nome com valor vazio',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.CAMPO_OBRIGATORIO,
        data: null
    }),
    atualizaNomeUsuario(usuarioOriginal.id, '')
);

testar(
    'Atualizar nome com menos de 2 caracteres',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.TAMANHO_INVALIDO,
        data: null
    }),
    atualizaNomeUsuario(usuarioOriginal.id, 'A')
);

testar(
    'Atualizar nome com caracteres inválidos',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.CARACTERES_INVALIDOS,
        data: null
    }),
    atualizaNomeUsuario(usuarioOriginal.id, 'Nome123')
);

testar(
    'Atualizar nome com ID inválido (string)',
    criarResposta({
        status: false,
        code: 404,
        message: 'USUARIO_NAO_ENCONTRADO',
        data: null
    }),
    atualizaNomeUsuario('abc', 'Nome Válido')
);

console.log("===== FIM DOS TESTES DE ATUALIZAÇÃO DE USUÁRIO =====");
