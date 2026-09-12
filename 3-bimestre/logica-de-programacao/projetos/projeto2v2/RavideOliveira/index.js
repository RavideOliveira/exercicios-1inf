const aluno = "Melissa Rocha"
const curso = "Curso de Confeitaria Básica"
const valorMensalidade = 300
const taxaMatricula = 50
const notaTeste = 3
const valorBase = valorMensalidade + taxaMatricula
const possuiIrmaoMatriculado = 0
const valorPago = 350

// nota

let aptidaoStatus = "aguardando"

if (notaTeste >= 5) {
    aptidaoStatus = "Aprovado no teste de aptidão"
} else {
    aptidaoStatus = "Reprovado no teste de aptidão"
}

// irmao matriculado

let valorBolsa = "aguardando"

if (possuiIrmaoMatriculado >= 1) {
    valorBolsa = 60
} else {
    valorBolsa = 0
}

const bolsaStatus = "Sem bolsa"
const valorFinal = valorBase - valorBolsa

// pagamento

const pagamento = valorPago
let pagamentoStatus = "aguardando"

if (valorPago >= valorFinal) {
   pagamentoStatus = "Matrícula quitada"
} else {
    this.pagamentoStatus = "Matrícula com saldo pendente"
}

// troco

let troco = valorPago - valorFinal

if (valorPago <= valorFinal) {
    troco = 0
}

// situacao matricula

let statusMatricula = "aguardando"

if(notaTeste >= 5) {
    statusMatricula = "Matrícula confirmada"
} else {
    statusMatricula = "Matrícula não pode ser confirmada: reprovado no teste de aptidão"
} 

// resumo

const resumo = `A aluna ${aluno}, fez um curso de ${curso}, sua nota foi de ${notaTeste} e precisava tirar 5, ela precisou pagar uma mensalidade de R$${valorMensalidade} mais uma taxa de R$${taxaMatricula} ou seja, um valor base de R$${valorBase}, se ela tivesse mais que ${possuiIrmaoMatriculado} irmãos matriculados receberia um desconto de R$60, mas recebeu R$${valorBolsa}, então ela precisava pagar R$${valorFinal}, e pagou R$${valorPago}, ou seja, ${pagamentoStatus} recebendo um troco de R$${troco}, e sua ${statusMatricula}`
console.log(resumo)

// nao mexer aqui

module.exports = {
    aluno,
    curso,
    valorMensalidade,
    taxaMatricula,
    notaTeste,
    possuiIrmaoMatriculado,
    valorPago,
    valorBase,
    aptidaoStatus,
    bolsaStatus,
    valorBolsa,
    valorFinal,
    pagamentoStatus,
    troco,
    statusMatricula,
    resumo
}