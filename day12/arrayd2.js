// let arr = [
//     1, 2, 3, 4, 5, 6,
//     7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18,
//     19, 20, 21, 22, 23, 24,
//     25, 26, 27, 28, 29, 30,
//     31, 32, 33, 34, 35, 36
// ]

// let parte1 = arr.slice(0,6)
// console.log(parte1)

// let parte2 = arr.slice(6,12)
// console.log(parte2)

/*
let matrix = []
let j = 0
const interval = Math.sqrt(arr.length)
for (let i = 0; i <= arr.length - 1; i++) {
    if (j === 0) {
        console.log(arr.slice(0, interval))
    } else if (j === interval) {
        console.log(arr.slice(i, i + interval))
        j = 0
    }
    j++
}
*/

let arr = [
    1, 1, 1, 0, 0, 0,
    0, 1, 0, 0, 0, 0,
    1, 1, 1, 0, 0, 0,
    0, 0, 2, 4, 4, 0,
    0, 0, 0, 2, 0, 0,
    0, 0, 1, 2, 4, 0
]

// let arr = [
//     1, 2, 3, 4, 5, 6,
//     7, 8, 9, 10, 11, 12,
//     13, 14, 15, 16, 17, 18,
//     19, 20, 21, 22, 23, 24,
//     25, 26, 27, 28, 29, 30,
//     31, 32, 33, 34, 35, 36
// ]

const hourglasses = []
let count = 0
for (let i = 0; i <= arr.length - 1; i++) {
    let ini = i
    let fim = i+3
    console.log(arr.slice(ini, fim))
    // console.log(arr.slice(i+1, 4))
    // console.log(arr.slice(i+2, 5))
    // console.log(arr.slice(i+3, 6))
    //break
}

