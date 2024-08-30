function normal(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + 2) === "hi") return true
    }
    return false
}

function beginEnd(str) {
    return str === "hi"
}

function end(str) {
    if (str.length < 2) return false
    return str.slice(str.length - 2, str.length) === "hi"
}

function begin(str) {
    if (str.length < 2) return false
    return str.slice(0, 2) === "hi"
}



console.log(begin("hellohihowareyou"))