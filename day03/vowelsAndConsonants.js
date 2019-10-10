const s = ['a', 'a', 'i', 'o', 'o', 'j', 'v', 's', 'c', 'r', 'p', 't', 'l', 'p', 's']

function vowelsAndConsonants(s) {
    const vogais = ['a', 'e', 'i', 'o', 'u']
    const result = []

    s.map(v => vogais.includes(v) ? result.push(v) : [])
    s.map(c => {!vogais.includes(c) ? result.push(c) : []})

    for (let i = 0 ; i<= result.length -1; i++){
        console.log(result[i])
    }

}

vowelsAndConsonants(s)