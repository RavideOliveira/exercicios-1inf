const prompt = require("prompt-sync")()

// Registro

const limiteEstoqueBaixo = Number(prompt("Qual o limite do estoque: "))
const quantidade = Number(prompt("Quantos produtos: "))

const catalogo = []

for (let i = 1; i <= quantidade; i++) {
    const nome = prompt("Digite o nome: ")
    const preco = Number(prompt("Qual o preço: "))
    const estoque = Number(prompt("Qual o estoque: "))
    catalogo.push({ nome, preco, estoque})
}

const produtoReajuste = prompt("Qual o produto que deseja reajustar: ")
const aumento = Number(prompt("Qual o valor do aumento: "))

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].nome === produtoReajuste) {
        catalogo[i].preco += aumento
    }
}

console.log(catalogo)
console.log(`Limite de estoque baixo: ${limiteEstoqueBaixo}`)

// Mais caro

let produtoMaisCaro = catalogo[0].nome

for (let i = 1; i < catalogo.length; i++) {
    if (catalogo[i].preco > catalogo[i - 1].preco) {
        produtoMaisCaro = catalogo[i].nome
    }
}


// Estoque total

let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque >= 0) {
        estoqueTotal += catalogo[i].estoque
    }
}

console.log(estoqueTotal)

// Estoque baixo

let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        produtosComEstoqueBaixo++
    }
}

// Reajuste de preço

for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].estoque <= limiteEstoqueBaixo) {
        catalogo[i].preco += aumento
    }
}

// Resumo

const resumo = `O produto mais caro foi o ${produtoMaisCaro}, o estoque total é de ${estoqueTotal} e os produtos com estoque baixo são: ${produtosComEstoqueBaixo}`

module.exports = {
    catalogo,
    limiteEstoqueBaixo,
    produtoMaisCaro,
    estoqueTotal,
    produtosComEstoqueBaixo,
    resumo
}