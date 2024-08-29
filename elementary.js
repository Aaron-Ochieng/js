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

const divide = (a, b) => {
    if (b === 0) throw new Error("ZeroDivisionError: division by zero");
    let qt = 0;
    let absA = Math.abs(a);
    let absB = Math.abs(b);
    while (absA >= absB) {
        absA -= absB;
        qt++;
    }
    return (a < 0) !== (b < 0) ? -quotient : quotient;
};

const modulo = (a, b) => {
    if (b === 0) throw new Error("ZeroDivisionError: integer division or modulo by zero");
    const quotient = divide(a, b);
    return a - multiply(quotient, b);
};