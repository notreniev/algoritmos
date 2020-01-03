/**
 * Complete the function rotLeft in the editor below. It should return the resulting array of integers. 
 * rotLeft has the following parameter(s):
 * 
 * An array of integers.
 * 
 * An integer , the number of rotations.
 */

const arr = [1, 2, 3, 4, 5]

function rotLeft(a, d) {
    for (let i = 0; i <= a.length - 1; i++) {
        for (let j = 1; j <= d; j++) {
            console.log(a)
            const item = a.shift()
            a.push(item)
        }
        return a.join(' ')
    }
}

console.log(rotLeft(arr, 4))