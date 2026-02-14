const { testar } = require("../../src/utils/testar");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { criaObjetoUsuario, cadastraUsuario } = require("../../src/usuarios/cadastrarUsuario");
const { usuarios } = require("../../src/dados/usuarios");
const { ERROS_CPF } = require("../../src/validacoes/cpf")
const { ERROS_DATA_NASC } = require("../../src/validacoes/dataNasc")
const { ERROS_NOME } = require("../../src/validacoes/nome")

const usuarioParaCadastro = criaObjetoUsuario(
    'Carlos Pereira',
    '987.654.321-00',
    '15/06/1998'
).data;

console.log("===== INÍCIO DOS TESTES DE CADASTRO DE USUÁRIO =====");

testar(
    'Criar objeto de usuário válido',
    criarResposta({
        status: true,
        code: 201,
        message: 'Usuário criado com sucesso',
        data: {
            id: 6,
            nome: 'João Silva',
            cpf: '123.456.789-09',
            dataNasc: '01/01/2000'
        }
    }),
    criaObjetoUsuario('João Silva', '123.456.789-09', '01/01/2000')
);

testar(
    'Tentar criar usuário com nome inválido',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_NOME.CAMPO_OBRIGATORIO,
        data: null
    }),
    criaObjetoUsuario('', '123.456.789-09', '2000-01-01')
);

testar(
    'Tentar criar usuário com CPF inválido',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_CPF.DIGITOS_REPETIDOS,
        data: null
    }),
    criaObjetoUsuario('João Silva', '111.111.111-11', '2000-01-01')
);

testar(
    'Tentar criar usuário com data de nascimento inválida',
    criarResposta({
        status: false,
        code: 400,
        message: ERROS_DATA_NASC.FORMATO_INVALIDO,
        data: null
    }),
    criaObjetoUsuario('João Silva', '123.456.789-09', '3000-01-01')
);

testar(
    'Cadastrar usuário com CPF inexistente',
    criarResposta({
        status: true,
        code: 201,
        message: 'Usuário cadastrado com sucesso',
        data: null
    }),
    cadastraUsuario(usuarioParaCadastro, usuarios)
);

testar(
    'Tentar cadastrar usuário com CPF já existente',
    criarResposta({
        status: false,
        code: 400,
        message: 'CPF_EXISTENTE',
        data: null
    }),
    cadastraUsuario(usuarioParaCadastro, usuarios)
);

console.log("===== FIM DOS TESTES DE CADASTRO DE USUÁRIO =====");