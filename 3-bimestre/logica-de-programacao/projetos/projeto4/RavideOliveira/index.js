const cliente = "Tatiane Souza"
const opcaoMenu = 1
const quantidade = 2

// forma de pagamento
let formaPagamento = "pix"
let pagamentoMensagem = ""

switch (formaPagamento) {
    case "pix":
        pagamentoMensagem = "Pagamento via PIX"
        break
    case "cartao":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case "dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro"
        break
    default:
        pagamentoMensagem = "Opção inválida"
        break
}

// identificação do item
let prato = "opcao1"

switch (prato) {
    case "opcao1":
        prato = "Açaí 300ml"
        break
    case "opcao2":
        prato = "Açaí 500ml"
        break
    case "opcao3":
        prato = "Vitamina"
        break
    case "opcao4":
        prato = "Tapioca"
        break
    default:
        prato = "Opção inválida"
        break
}

// preço unitário
let precoUnitario = "opcao1"

switch (precoUnitario) {
    case "opcao1":
        precoUnitario = 14
        break
    case "opcao2":
        precoUnitario = 20
        break
    case "opcao3":
        precoUnitario = 12
        break
    case "opcao4":
        precoUnitario = 10
        break
    default:
        precoUnitario = 0
        break
}

// subtotal
const subtotal = precoUnitario * quantidade

// Frete
let frete = subtotal >= 40 ? 0 : 10
let freteStatus = subtotal >= 40 ? "Frete grátis" : "Frete pago"

// desconto
let descontoPercentual = 1

switch (formaPagamento) {
    case "pix":
        descontoPercentual = 10
        break
    case "dinheiro":
        descontoPercentual = 10
        break
    case "cartao":
        descontoPercentual = 0
        break
    default:
        descontoPercentual = 0
        break
}

const desconto = (subtotal * descontoPercentual) / 100
const total = subtotal - desconto + frete

// situaçao pedido
let statusPedido = "aprovado"
let statusMensagem = ""

switch (statusPedido) {
    case "aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case "enviado":
        statusMensagem = "Pedido a caminho"
        break
    case "cancelado":
        statusMensagem = "Pedido cancelado"
        break
    default:
        statusMensagem = "Status desconhecido"
        break
}

// resumo
const resumo = `A cliente ${cliente} comprou ${quantidade} ${prato} que custou ${subtotal}, pagou um ${freteStatus} de ${frete},
seu pagamento foi ${pagamentoMensagem}, recebeu desconto de ${desconto}, deu um total de ${total}, logo ${statusMensagem}`

module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}