const prompt = require("prompt-sync")()

// Dados da semana

const quantidadeDeDias = Number(prompt("Quantidade de dias: "))
const metaDiaria = Number(prompt("Meta diária: "))
const metaSemanal = Number(prompt("Meta semanal: "))

// RF02, RF04, RF05

let totalVendido = 0
let diasAcimaDaMeta = 0
let melhorDia = 0

for (i = 1; i <= 5; i++) {
    const venda = Number(prompt(`Vendas do dia ${i}: `))
    totalVendido += venda
    if (venda >= metaDiaria) {
        diasAcimaDaMeta++
    }
    if (venda > melhorDia) {
        melhorDia = venda
    }
}

// média

const mediaVendas = totalVendido / quantidadeDeDias

// situação da semana

let situacaoSemana = totalVendido >= metaSemanal ? "Meta semanal atingida" : "Meta semanal não atingida"

// resumo

const resumo = `O total de peças vendidas foram de ${totalVendido}, a média de vendas é ${mediaVendas}, 
e a quantidade de dias acima da meta foram de ${diasAcimaDaMeta}, o melhor dia de vendas foi o dia 
${melhorDia}, a situação da semana foi ${situacaoSemana}.`




module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}