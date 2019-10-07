function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou]).*\1$/i;
    console.log(re.exec(str))
    
    /*
     * Do not remove the return statement
     */
    return re;
}

regexVar("abcda")