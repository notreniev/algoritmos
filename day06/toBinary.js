function toBinary(num){

    let resultado = []
    let resto = []

    let i = 0
    while (num >= 1){
        resto[i] = parseInt(num).toFixed(2) % 2
        resultado[i] = parseFloat(num/2).toFixed(2)
        num = resultado[i]
        i++
    }

    return resto.reverse().join("")

}

console.log(toBinary(75))
