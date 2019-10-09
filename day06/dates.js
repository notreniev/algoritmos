// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let date = new Date(dateString)
    let day = date.toString()

    day = day.split(" ")[0]

    switch(day){
        case 'Sun':
        dayName = 'Sunday'
        break
        case 'Mon':
        dayName = 'Monday'
        break
        case 'Tue':
        dayName = 'Tuesday'
        break
        case 'Wed':
        dayName = 'Wednesday'
        break
        case 'Thu':
        dayName = 'Thursday'
        break
        case 'Fri':
        dayName = 'Friday'
        break
        case 'Sat':
        dayName = 'Saturday'
        break
    }

    return dayName;
}


console.log(getDayName("10/11/2009"))
console.log(getDayName("12/12/2013"))
console.log(getDayName("01/01/1990"))
console.log(getDayName("09/11/1999"))
console.log(getDayName("12/12/2013"))
console.log(getDayName("12/12/2012"))