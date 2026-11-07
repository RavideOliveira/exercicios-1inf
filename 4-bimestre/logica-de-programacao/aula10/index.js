const prompt = require("prompt-sync")()

const produto = {
    nome: prompt("Nome do produto: "),
    preco: Number(prompt("Preço: ")),
    estoque: Number(prompt("Estoque: "))
}

const aumento = Number(prompt("Aumento do preço: "))

produto.preco = produto.preco + aumento

console.log(produto.preco)

module.exports = produto