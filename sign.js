function sign(num) {
    return num < 1 ? 0 : 1;
}

function sameSign(a, b) {


    if (a == 0 && b < 0 || b == 0 && a < 0) {
        return false
    }
    if (a < 1 && b < 1) {
        return true
    }
    if (a > 0 && b > 0) {
        return true
    }
    return false
}

// console.log(sameSign(1, 9))
// console.log(Math.sign(1) == Math.sign(9))