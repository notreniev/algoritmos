const arr = [1, 2, 3, 4, 5]

// for (let i in arr) {
//     const first = arr[i]
//     console.log(arr.join(" "))
//     const item = arr.shift()
//     arr.push(item)
// }

function rotLeft(a, d) {
    let res
    for (let i = 0; i <= a.length - 1; i++) {
        for (let j = 1; j <= d; j++) {
            console.log(a)
            const item = a.shift()
            a.push(item)
        }
        res = a.join(' ')
        return res
    }
}

console.log(rotLeft(arr, 4))