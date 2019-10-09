function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */

    let re = /^(Mr|Mrs|Ms|Dr|Er)(\.)([a-zA-Z])*$/
    //let str = "Mrs."
    //console.clear()
    console.log(re.exec(str))

    /*
     * Do not remove the return statement
     */
    return re;
}


//Mr., Mrs., Ms., Dr., or Er
regexVar("er.")