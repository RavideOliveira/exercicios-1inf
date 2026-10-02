const pagamento = "pix"
let resultado = ""

switch (pagamento) {
    case "pix":
        resultado = "Pagamento via PIX"
        break
    case "cartao":
        resultado = "Pagamento via cartão"
        break
    case "dinheiro":
        resultado = "Pagamento em dinheiro"
        break
    default:
        resultado = "Forma de pagamento invalída"
        break
}

module.exports = resultado