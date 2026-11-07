const prompt = require("prompt-sync")()

const quantidadeDeVendas = Number(prompt("Quantas vendas? "))

const vendasDasSemanas = []

for (let venda = 1; venda <= quantidadeDeVendas; venda++) {
    const valor = Number(prompt(`Venda: ${venda}`))
    vendasDasSemanas.push(valor)
}

console.log(vendasDasSemanas)

let menorVenda = vendasDasSemanas[0]

for (let i = 1; i < vendasDasSemanas.length; i++) {
    if (vendasDasSemanas[i] < menorVenda) {
        menorVenda = vendasDasSemanas[i]
    }
}

console.log(menorVenda)

module.exports = menorVenda