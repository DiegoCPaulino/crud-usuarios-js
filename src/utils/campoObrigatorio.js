function campoObrigatorio(valor) {
    return typeof valor === 'string' && valor.trim() !== '';
}

module.exports = {
    campoObrigatorio
}