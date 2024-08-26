function concatStr(a,b) {
    return typeof (a) == "number" || typeof (b) == "number" ? a.toString() + b.toString() : a+b;
}

// console.log(concatStr(1,2))