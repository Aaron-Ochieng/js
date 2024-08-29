function cutFirst(str) {
    return str.slice(2)
}

function cutLast(str) {
    let res = ''
    for (let i = 0; i < str.length - 2; i++) {
        res = res + str[i]
    }
    return res
}


function cutFirstLast(str) {
    let res = ""
    for (let i = 2; i < str.length - 2; i++) {
        res = res + str[i]
    }
    return res
}

function keepFirst(str) {
    let res = ""
    const len = str.length >= 2 ? 2 : str.length
    for (let i = 0; i < len; i++) {
        res = res + str[i]
    }
    return res
}

function keepLast(str) {
    let res = ""
    const len = str.length >= 2 ? str.length - 2 : str.length-1
    for (let i = len; i < str.length; i++) {
        res = res + str[i]
    }
    return res
}


console.log(keepLast('ab'))