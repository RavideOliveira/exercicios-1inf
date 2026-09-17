const nome = "Rávide Oliveira"
const idade = 16
let categoria = "comum"
const possuiCarteirinha = true
let suspenso = false
const valorReserva = 10
const valorPago = 10
const troco = valorPago - valorReserva

// idade

let idadeStatus = "Idade não permitida"
if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

// categoria 

let nivelAcesso = "comum"
if (categoria === "bibliotecario" || categoria === "coordenador") {
    nivelAcesso = "bibliotecario/coordenador"
} else {
    nivelAcesso = "Acesso comum"
}

// liberação de acesso

let acessoStatus = "negado"
if (idade >= 18 && possuiCarteirinha && !suspenso) {
    acessoStatus = "Acesso à sala liberado"
} else {
    acessoStatus = "Acesso à sala negado"
}

// verificação do pagamento 

let pagamentoStatus = "insuficiente"
if (valorPago >= valorReserva) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

// situação final
let statusReserva = "negado"
if (acessoStatus === "Acesso à sala liberado" &&  pagamentoStatus === "Pagamento aprovado") {
    statusReserva = "Reserva da sala confirmada"
} else {
    statusReserva = "Reserva da sala não confirmada"
}

const resumo = `O cliente ${nome}, que tem ${idade} anos, e possui carteirinha (${possuiCarteirinha}) pagou R$${valorPago} para alugar uma reserva que custou R$${valorReserva}, sua categoria era ${categoria} então recebeu um acesso ${nivelAcesso}, e foi suspenso (${suspenso}) seu troco foi de R$${troco}, em resumo, ${acessoStatus}, ${pagamentoStatus}, ${statusReserva} `


module.exports = {
    nome,
    idade,
    categoria,
    possuiCarteirinha,
    suspenso,
    valorReserva,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusReserva,
    resumo
}