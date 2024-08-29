function multiply(a, b) {
    let mult = 0
    if (a === 0 || b === 0) {
        return 0
    }
    if (a < 0 || b < 0) {
        if (a < 0) a = a * -1
        if (b < 0) b = b * -1

        for (let i = 1; i <= b; i++) {
            mult = mult + -a
        }
    }

    for (let i = 1; i <= b; i++) {
        mult = mult + a
    }
    return mult
}
