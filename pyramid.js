const triangle = (string, value) => {
    let res = ""
    for (let i = 1; i <= value; i++) {
        if (i !== value) {
            res += reprint(string, i) + "\n"
        } else {
            res += reprint(string, i)
        }
    }
    return res
}

const reprint = (string, n) => {
    let res = ""
    for (let i = 0; i < n; i++) {
        res += string
    }
    return res
}

// console.log(pyramid("{}", 12))