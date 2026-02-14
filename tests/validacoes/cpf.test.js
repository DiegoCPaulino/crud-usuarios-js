const { validaCPF, ERROS_CPF } = require("../../src/validacoes/cpf");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { testar } = require("../../src/utils/testar");

console.log("===== INÍCIO DOS TESTES DE CPF =====")

testar(
  "CPF válido (formatado)",
  criarResposta({
    status: true,
    code: 200,
    message: null,
    data: null }),
  validaCPF("047.484.388-27")
);

testar(
  "CPF válido (sem formatação)",
  criarResposta({
    status: true,
    code: 200,
    message: null,
    data: null }),
  validaCPF("04748438827")
);

testar(
  "CPF com dígitos inválidos",
  criarResposta({
    status: false,
    code: 400,
    message: ERROS_CPF.DIGITOS_INVALIDOS,
    data: null }),
  validaCPF("047.484.388-17")
);

testar(
  "CPF com dígitos repetidos",
  criarResposta({
    status: false, 
    code: 400,
    message: ERROS_CPF.DIGITOS_REPETIDOS,
    data: null }),
  validaCPF("555.555.555-55")
);

testar(
  "CPF com tamanho inválido",
  criarResposta({
    status: false,
    code: 400,
    message: ERROS_CPF.TAMANHO_INVALIDO,
    data: null }),
  validaCPF("047.484.388-179")
);

testar(
  "CPF vazio",
  criarResposta({
    status: false,
    code: 400,
    message: ERROS_CPF.CAMPO_OBRIGATORIO,
    data: null }),
  validaCPF("")
);

testar(
  "CPF válido com espaços no início e no fim",
  criarResposta({
    status: true,
    code: 200,
    message: null,
    data: null
  }),
  validaCPF("  047.484.388-27  ")
);

/* Aqui temos um erro. Esse teste está retornando true. */
testar(
  "CPF com letras misturadas",
  criarResposta({
    status: false,
    code: 400,
    message: ERROS_CPF.TAMANHO_INVALIDO,
    data: null
  }),
  validaCPF("047a484b388c27")
);

testar(
  "CPF apenas com pontuação",
  criarResposta({
    status: false,
    code: 400,
    message: ERROS_CPF.TAMANHO_INVALIDO,
    data: null
  }),
  validaCPF("...---...")
);

testar(
  "CPF com todos os dígitos zero",
  criarResposta({
    status: false,
    code: 400,
    message: ERROS_CPF.DIGITOS_REPETIDOS,
    data: null
  }),
  validaCPF("000.000.000-00")
);

testar(
  "CPF null",
  criarResposta({
    status: false,
    code: 400,
    message: ERROS_CPF.CAMPO_OBRIGATORIO,
    data: null
  }),
  validaCPF(null)
);

testar(
  "CPF undefined",
  criarResposta({
    status: false,
    code: 400,
    message: ERROS_CPF.CAMPO_OBRIGATORIO,
    data: null
  }),
  validaCPF(undefined)
);

testar(
  "CPF como número",
  criarResposta({
    status: false,
    code: 400,
    message: ERROS_CPF.CAMPO_OBRIGATORIO,
    data: null
  }),
  validaCPF(4748438827)
);

testar(
  "CPF com quebra de linha",
  criarResposta({
    status: true,
    code: 200,
    message: null,
    data: null
  }),
  validaCPF("\n047.484.388-27\n")
);

console.log("===== FIM DOS TESTES DE CPF =====");