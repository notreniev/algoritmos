let arr = [
    1, 1, 1, 0, 0, 0,
    0, 1, 0, 0, 0, 0,
    1, 1, 1, 0, 0, 0,
    0, 0, 2, 4, 4, 0,
    0, 0, 0, 2, 0, 0,
    0, 0, 1, 2, 4, 0
]

const saida = []
let count = 0
for (let i = 0; i <= 3; i++) {
    saida.push(arr.slice(i, i + 3))
}

for (let i = 3; i <= 6; i += 3) {
    saida.push(arr.slice(i, i + 3))
}

console.log(saida)

//for (let j = 0; j <= saida.length - 1; j++) {
// console.log(saida[0], saida[1], saida[2], saida[3])
//}