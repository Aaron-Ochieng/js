function get(a, b) {
    let clone = a
    if (typeof a === "object") {
        const values = b.split('.')
        for (const value of values) {
            if (value in a) {
                clone = a[value]
            }
        }
    }
    return clone
}