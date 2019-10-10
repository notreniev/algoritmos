// Complete the sockMerchant function below.
function sockMerchant(n, ar) {

    ar.sort()
    let count = 0
    for (let i = 0; i <= n - 1; i++) {
        if (ar[i] == ar[i + 1]) {
            count = count + 1
            i = i + 1
        }
    }

    return count

}

let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log(sockMerchant(9, arr))