const nome = "Rávide Oliveira"
const idade = 16
let categoria = "comum"
const possuiCarteirinha = true
let suspenso = false
const valorReserva = 10
const valorPago = 10
const troco = valorPago - valorReserva

// idade

let idadeStatus = "menor de idade"
if (idade >= 18) {
    console.log("Idade permitida")
    idadeStatus = "maior de idade"
} else {
    console.log("Idade não permitida")
    idadeStatus = "menor de idade"
}

// categoria 

let nivelAcesso = "comum"
if (categoria === "bibliotecario" || categoria === "coordenador") {
    console.log("Acesso administrativo liberado")
    nivelAcesso = "bibliotecario/coordenador"
} else {
    console.log("Acesso comum")
    nivelAcesso = "comum"
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

const resumo = `O cliente ${nome} pagou R$${valorPago} para alugar uma reserva que custou R$${valorReserva}, sua categoria era ${categoria} então recebeu um acesso ${nivelAcesso}, seu troco foi de R$${troco}, em resumo, ${acessoStatus}, ${pagamentoStatus}, ${statusReserva} `


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