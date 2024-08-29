function multiply(a, b) {
    let result = 0;
    const positive = Math.abs(b);
    for (let i = 0; i < positive; i++) {
        result += a;
    }
    return b < 0 ? -result : result;
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
    return (a < 0) !== (b < 0) ? -qt : qt;
};

const modulo = (a, b) => {
    if (b === 0) throw new Error("ZeroDivisionError: integer division or modulo by zero");
    const qt = divide(a, b);
    return a - multiply(qt, b);
};