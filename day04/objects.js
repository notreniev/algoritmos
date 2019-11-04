function getLuckyFloorNumber(n){
    let re = /^4|13+/g
    if (!re.test(n)){
        console.log("only good numbers: ", n)
    }else{
        console.log("bad numbers: ", n+1)
    }
}

function main(n){
    for(let i = 1; i< n; i++){
        getLuckyFloorNumber(i)
    }
}

main(140)