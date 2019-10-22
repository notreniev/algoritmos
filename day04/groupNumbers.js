function packNumbers(arr) {
    const result = []
    let pack = []

    pack = arr.reduce((r, v, i, a) => {
        if (v === a[i - 1]) {
            r[r.length - 1].push(v)
        } else {
            r.push(v === a[i + 1] ? [v] : v)
        }
        return r
    }, [])

    for (let i in pack) {
        const p = pack[i]
        let item = parseInt(p)
        result.push(p.length ? item + ':' + p.length : p)
    }

    return result

}

let arr = [5, 5, 5, 7, 7, 3, 4, 7]
console.log(packNumbers(arr))