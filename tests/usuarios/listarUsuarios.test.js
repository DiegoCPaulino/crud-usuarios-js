const { testar } = require("../../src/utils/testar");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { ordemID, ordemAlfabetica } = require("../../src/usuarios/listarUsuarios");
const { usuarios } = require("../../src/dados/usuarios");

console.log("===== INÍCIO DOS TESTES DE LISTAGEM DE USUÁRIOS =====");

testar(
    'Listar usuários ordenados por ID',
    criarResposta({
        status: true,
        code: 200,
        message: 'Lista ordenada por ID',
        data: [...usuarios].sort((a, b) => a.id - b.id)
    }),
    ordemID(usuarios)
);

testar(
    'Listar usuários por ID com lista vazia',
    criarResposta({
        status: true,
        code: 200,
        message: 'Lista ordenada por ID',
        data: []
    }),
    ordemID([])
);

testar(
    'Listar usuários em ordem alfabética',
    criarResposta({
        status: true,
        code: 200,
        message: 'Lista ordenada alfabeticamente',
        data: [...usuarios].sort((a, b) => a.nome.localeCompare(b.nome))
    }),
    ordemAlfabetica(usuarios)
);

testar(
    'Listar usuários em ordem alfabética com lista vazia',
    criarResposta({
        status: true,
        code: 200,
        message: 'Lista ordenada alfabeticamente',
        data: []
    }),
    ordemAlfabetica([])
);

console.log("===== FIM DOS TESTES DE LISTAGEM DE USUÁRIOS =====");
