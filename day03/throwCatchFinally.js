/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    console.clear()
    try {
        s = s.split("")
        s = s.reverse()
        s = s.join("")
        console.log(s)
    } catch (error) {
        console.log(error.message)
        console.log(s)
    }
}

reverseString("1234")