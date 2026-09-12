// CRIE SUA SOLUÇÃO ABAIXO ================
// INFORMAÇÕES DA CLIENTE
const cliente = "Mariana Silva"
const cidade = "Fortaleza"
const produto = "Notebook Pro"
const categoria = "Notebook"
const preco = 3500
const quantidade = 2
const descontoPercentual = 10
const valorPago = 7000
const subtotal = preco * quantidade
const valorDesconto = subtotal * descontoPercentual / 100
const valorFinal = subtotal - valorDesconto
const troco = valorPago - valorFinal
const resumo = `TECHSTORE SISTEMAS
RESUMO DO PEDIDO
Cliente: ${cliente}
Cidade: ${cidade}

Produto: ${produto}
Categoria: ${categoria}
Quantidade: ${quantidade}
Preço unitário: R$ ${preco}

Subtotal: R$ ${subtotal}
Desconto: R$ ${descontoPercentual}
Valor do desconto: ${valorDesconto}
Valor final: R$ ${valorFinal}

Valor pago: R$ ${valorPago}
Troco: R$ ${troco}

Obrigado pela compra!
`
console.log(resumo)
// ===NÃO EXECUTAR O CÓDIGO NO TERMINAL=====
// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo
}