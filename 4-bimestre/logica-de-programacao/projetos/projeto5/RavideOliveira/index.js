const prompt = require("prompt-sync")()

//Registro do turno

const nomeTurno = prompt("Digite seu turno: ")
const meta = Number(prompt("Digite sua meta: "))
const producaoInicial = Number(prompt("Produção inicial: "))
const pecasPorCaixa = Number(prompt("Peças em cada caixa: "))

//Produção ate meta

let producaoFinal = producaoInicial
while (producaoFinal < meta) {
    producaoFinal++
    console.log(producaoFinal)
}

//Caixas para embalar

let caixasNecessarias = 0
let restante = 0

do {
    caixasNecessarias++
    restante -= pecasPorCaixa
} while (restante < 0)

//Situação da meta

const situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"

//Resumo

const resumo = `As produções de camisetas no ${nomeTurno} foram de ${producaoFinal} a meta eram
 de ${meta}, foram necessárias ${caixasNecessarias} caixas, a situação final foi ${situacaoMeta}.`

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}