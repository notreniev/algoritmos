/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    const result = []

    let collection = Array.from(s)

    collection.map(v => vogais.includes(v) ? result.push(v) : [])
    collection.map(c => {!vogais.includes(c) ? result.push(c) : []})

    for (let i = 0 ; i<= result.length -1; i++){
        console.log(result[i])
    }
}

const param = ['a','a','i','o','o','j','v','s','c','r','p','t','l','p','s']

vowelsAndConsonants("javascriptloops")