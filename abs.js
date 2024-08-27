function isPositive(num) {
    return num < 1 ? false : true;
}

function abs(num){
    if (num == -0 || num == 0){
        return 0
    }
    return num < 1 ? num * -1 : num
}

// console.log(abs(0))