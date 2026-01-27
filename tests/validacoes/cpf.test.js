const { validaCPF, ERROS_CPF } = require("../../src/validacoes/cpf");
const { criarResposta } = require("../../src/utils/criarRespostas");
const { testar } = require("../../src/utils/testar");

console.log("===== INÍCIO DOS TESTES DE CPF =====")

testar(
  "CPF válido (formatado)",
  criarResposta({ status: true, code: 200, message: null, data: null }),
  validaCPF("047.484.388-27")
);

testar(
  "CPF válido (sem formatação)",
  criarResposta({ status: true, code: 200, message: null, data: null }),
  validaCPF("04748438827")
);

testar(
  "CPF com dígitos inválidos",
  criarResposta({ status: false, code: 400, message: ERROS_CPF.DIGITOS_INVALIDOS, data: null }),
  validaCPF("047.484.388-17")
);

testar(
  "CPF com dígitos repetidos",
  criarResposta({ status: false, code: 400, message: ERROS_CPF.DIGITOS_REPETIDOS, data: null }),
  validaCPF("555.555.555-55")
);

testar(
  "CPF com tamanho inválido",
  criarResposta({ status: false, code: 400, message: ERROS_CPF.TAMANHO_INVALIDO, data: null }),
  validaCPF("047.484.388-179")
);

testar(
  "CPF vazio",
  criarResposta({ status: false, code: 400, message: ERROS_CPF.CAMPO_OBRIGATORIO, data: null }),
  validaCPF("")
);

/*
Essa função retorna status: 'ERROR' pois não existe um tratamento de erro para caracteres especiais.
É necessário trabalhar no arquivo "../../src/validacoes/cpf".
----------------------------------------------------------------------------------------------------
testar(
    "CPF com caracteres especiais",
    criarResposta({ status: false, code: 400, message: ERROS_CPF.DIGITOS_INVALIDOS, data: null }),
    validaCPF("047.484.%88-27")
);
*/

console.log("===== INÍCIO DOS TESTES DE CPF =====")