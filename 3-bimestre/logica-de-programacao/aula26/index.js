const idade = 25
const cargo = "gerente"
const ativo = true
let resultado =""

if (idade >= 18 && cargo === "gerente" && ativo == true) {
    resultado = "Acesso permitido"
} else {
    resultado = "Acesso negado"
}

module.exports = resultado