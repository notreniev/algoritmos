function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */

    let re = /\d+/g
    var teste = "102, 1948948 and 1.3 and 4.5"
    return teste.match(re)

    /*
     * Do not remove the return statement
     */
    return re;
}

console.log(regexVar())