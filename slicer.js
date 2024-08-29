function slice(a, b, c) {
    if (c > a.length - 1) return undefined
    const end = c ? c : a.length;
    let res = []
    if (typeof a === Array.isArray) {

        for (let i = 0; i < end; i++) {
            res.push(a[i])
        }
    }

    if (typeof a === "string") {
        let x = ""

        for (let i = b; i < end; i++) {
            x = x + a[i]
        }
        return x
    }
    return res
}

// console.log(slice("Aaron", 2, 7))