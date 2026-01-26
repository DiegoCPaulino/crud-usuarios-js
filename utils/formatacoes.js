function formatarCPF(cpf) {
  return cpf.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    '$1.$2.$3-$4'
  )
}

function formataNome(nome) {
    return nome
        .toLowerCase()
        .split(' ')
        .map(palavra => palavra[0].toUpperCase() + palavra.slice(1))
        .join(' ');
}

function formataUsuario(novoUsuario) {
    return {
        ...novoUsuario,
        nome: formataNome(novoUsuario.nome),
        cpf: formatarCPF(novoUsuario.cpf),
        dataNasc: novoUsuario.dataNasc
    };
}

module.exports = {
    formatarCPF,
    formataNome,
    formataUsuario
}