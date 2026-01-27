function testar(descricao, esperado, atual) {
  const testeStatus = JSON.stringify(esperado) === JSON.stringify(atual) ? "SUCCESS" : "ERROR";

  const log = {
    status: testeStatus,
    descricao: descricao,
    esperado: JSON.stringify(esperado),
    atual: JSON.stringify(atual)
  };

  if (testeStatus === "SUCCESS") {
    console.log(log);
  } else {
    console.error(log);
  }
}

module.exports = {
    testar
}