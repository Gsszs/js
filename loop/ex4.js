// 4. Faça um programa que imprima na tela a tabuada de um número

let num = parseInt(prompt("Digite um número para a tabuada"))

for (let cont = 1; cont <= 10; cont++){
    console.log(cont + " x " + num + " = " + (cont * num))
}