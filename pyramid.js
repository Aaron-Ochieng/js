function pyramid(string, number) {
    let res = ""
    for (let i = 0; i < number; i++) {
        let spaces = ' '.repeat((number - i - 1) * string.length)
        let strings = string.repeat(i * 2 + 1)
        if (i !== number - 1) {
            res += spaces + strings + "\n"
        } else {
            res += spaces + strings
        }
    }
    return res
}

console.log(pyramid("{}", 12))