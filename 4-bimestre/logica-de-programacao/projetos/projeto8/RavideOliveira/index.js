const prompt = require("prompt-sync")()

// Registro do pedido

const precoUnitario = Number(prompt("Preço unitário: "))
const quantidade = Number(prompt("Quantidade: "))
const formaPagamento = prompt("Forma de pagamento: ")

// Subtotal

const calcularSubtotal = (precoUnitario, quantidade) => {
    return precoUnitario * quantidade
}

const subtotal = calcularSubtotal(precoUnitario, quantidade)

console.log(subtotal)

// Frete

function calcularFrete(subtotal) {
    if (subtotal < 100) {
        return 10
    }
    return 0
}

const frete = calcularFrete(subtotal)

// Desconto

function calcularDesconto(subtotal, formaPagamento) {
    switch (formaPagamento) {
        case "pix":
            return (subtotal * 5) / 100

        case "dinheiro":
            return (subtotal * 5) / 100

        case "cartao":
            return 0

        default:
            return "Não identificado"

    }
}

const desconto = calcularDesconto(subtotal, formaPagamento)

// Total

function calcularTotal(preco, quantidade, formaPagamento) {
    const subtotal = calcularSubtotal(preco, quantidade)
    const frete = calcularFrete(subtotal)
    const desconto = calcularDesconto(subtotal, formaPagamento)

    return subtotal - desconto + frete
}

const total = calcularTotal(precoUnitario, quantidade, formaPagamento)

// Resumo

const resumo = `${subtotal}, ${frete}, ${desconto}, ${total}`

console.log(resumo)

module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}