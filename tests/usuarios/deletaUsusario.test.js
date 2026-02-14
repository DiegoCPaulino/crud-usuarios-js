const { testar } = require("../../src/utils/testar");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { deletaPorID, deletaPorCPF } = require("../../src/usuarios/deletaUsuario");
const { usuarios } = require("../../src/dados/usuarios");

const usuarioParaDeletarPorID = { ...usuarios[0] };
const usuarioParaDeletarPorCPF = { ...usuarios[1] };

console.log("===== INÍCIO DOS TESTES DE DELEÇÃO DE USUÁRIO =====");

testar(
    'Deletar usuário existente por ID',
    criarResposta({
        status: true,
        code: 200,
        message: 'Usuário deletado com sucesso',
        data: null
    }),
    deletaPorID(usuarioParaDeletarPorID.id)
);

testar(
    'Deletar usuário existente por CPF (formato diferente)',
    criarResposta({
        status: true,
        code: 200,
        message: 'Usuário deletado com sucesso',
        data: null
    }),
    deletaPorCPF(usuarioParaDeletarPorCPF.cpf.replace(/\D/g, ''))
);

testar(
    'Tentar deletar usuário inexistente por ID',
    criarResposta({
        status: false,
        code: 404,
        message: 'USUARIO_NAO_ENCONTRADO',
        data: null
    }),
    deletaPorID(999999)
);

testar(
    'Tentar deletar usuário inexistente por CPF',
    criarResposta({
        status: false,
        code: 404,
        message: 'USUARIO_NAO_ENCONTRADO',
        data: null
    }),
    deletaPorCPF('000.000.000-00')
);

console.log("===== FIM DOS TESTES DE DELEÇÃO DE USUÁRIO =====");
