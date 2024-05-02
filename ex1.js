let nome = prompt("Olá, digite seu nome")
let senha = prompt("Digite a senha")

if (nome == "admin" && senha == "senha123") {
    console.log("Bem-vindo " + nome)
} else {
    console.log("Nome incorreto")
}