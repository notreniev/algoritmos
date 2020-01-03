/**
 * Faça um algoritmo para ler: a descrição do produto (nome), a quantidade 
 * adquirida e o preço unitário. 
 * 
 * Calcular e escrever o total (total = quantidade adquirida * preço unitário), o 
 * desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que:
 * 
 * - Se quantidade <= 5 o desconto será de 2%
 * 
 * - Se quantidade > 5 e quantidade <= 10 o desconto será de 3%
 * 
 * - Se quantidade > 10 o desconto será de 5%
 */

function desconto(quantidade) {
    if (!quantidade) return

    let desconto = 0
    quantidade = parseInt(quantidade)

    if (quantidade <= 5) {
        desconto = 0.02
    }
    if (quantidade > 5 && quantidade <= 10) {
        desconto = 0.03
    }
    if (quantidade > 10) {
        desconto = 0.05
    }

    return parseFloat(desconto)
}

function ler() {
    const result = document.getElementById('result')

    const produto = window.prompt('Entre com o nome do produto: ')
    !produto ? alert('Produto não pode ser nulo!') : produto

    const quantidade = parseInt(window.prompt('Entre com a quantidade adquirida: '))
    !quantidade ? alert('Quantidade não pode ser nula!') : quantidade

    const precoUnitario = parseFloat(window.prompt('Preço unitário do produto: '))
    !precoUnitario ? alert('Preço unitário não pode ser nulo!') : precoUnitario

    const total = parseFloat(quantidade * precoUnitario)
    const totalAPagar = total - (total * desconto(quantidade))

    result.innerHTML = `O produto adquirido foi <strong>${produto}</strong>, na quantidade de <strong>${quantidade}</strong> a um preço unitário de <strong>${precoUnitario}</strong>`
    result.innerHTML += `<br><br>Total: ${total}`
    result.innerHTML += `<br><br>Total a pagar (com desconto): ${totalAPagar}`
}