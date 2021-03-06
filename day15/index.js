/**
 * Navigate through the DOM in the Table example
 * and find the styles of colors and backgrounds 
 * where the content can't be seen by the human eye.
 * 
 * Return only the letters corresponding to those cells
 * where the content of background-color and color can be seen. 
 * 
 * The result shoud be QAQO
 * 
 */


 function load() {
    var table = document.getElementsByTagName('table')
    const result = document.getElementById('result')
    const html = Array.from(table)

    const arr = []

    html.forEach(elem => {
        elem.querySelectorAll('td').forEach((td) => {
            let color = td.style.color
            let backgroundColor = td.style['background-color']
            arr.push({
                "letter": td.textContent,
                "color": color,
                "backgroundColor": backgroundColor
            })
        })
    })

    let filtered = []
    for (let i = 0; i <= arr.length - 1; i++){
        if (arr[i].color != arr[i].backgroundColor){
            filtered.push(arr[i].letter)
        }
    }

    result.innerHTML = filtered.join("")
}