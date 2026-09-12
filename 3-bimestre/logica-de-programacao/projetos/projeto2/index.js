const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000
const subtotal = preco * quantidade

let estoqueDisponivel = "Sim"
let descontoPercentual 
let pagamentoStatus = "Pagamento aprovado"
let statusPedido = "Pedido disponível para finalização"

// estoque 

if (estoque >= quantidade) {
     estoqueDisponivel = "Sim"
     statusPedido = "Pedido disponível para finalização"
} else {
     estoqueDisponivel = "Não"
     statusPedido = "Pedido não pode ser finalizado por falta de estoque"
}

// valor desconto

if (subtotal >= 1000) {
     descontoPercentual = 10
} else {
     descontoPercentual = 0
}

const valorDesconto = (subtotal * descontoPercentual) / 100
const valorFinal = subtotal - valorDesconto

// verificação do pagamento

if (valorPago >= valorFinal) {
     pagamentoStatus = "Pagamento aprovado"
} else {
         pagamentoStatus = "Pagamento reprovado"
    }

// informações da venda
// resumo e troco
const troco = valorPago - valorFinal
const resumo = `"O pedido do cliente ${cliente} de ${quantidade} ${produto}, cujo preço da unidade equivale há R$${preco}, vai custar R$${subtotal}, com ${descontoPercentual}% de desconto, ou seja, R$${valorDesconto}, chegando a R$${valorFinal}, atualmente ${estoqueDisponivel} em estoque, o pagamento foi de R$${valorPago}, ou seja, ${pagamentoStatus}, ${statusPedido}, e seu troco foi de R$${troco}"`
console.log(resumo)

// não mexer aqui

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
}