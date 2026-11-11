const prompt = require("prompt-sync")()

const subtotal = Number(prompt("Subtotal do pedido: "))

function calcularFrete(subtotal) {
    if (subtotal >= 80) {
        return 0
    }
    return 10
}

const frete = calcularFrete(subtotal)

console.log(frete)

module.exports = frete