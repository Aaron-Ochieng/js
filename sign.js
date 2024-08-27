function sign(num) {
    if (num === 0) {
        return 0
    }
    if (num < 1) {
        return -1
    }
    if (num > 1) {
        return 1
    }
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

// console.log(sameSign(-2, -1))
// console.log(Math.sign(-2) == Math.sign(-1))