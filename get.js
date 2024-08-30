function get(a, b) {
    let clone = a
    if (typeof a === "object") {
        const values = b.split('.')
        for (const value of values) {
            if (clone && value in clone) {
                clone = clone[value]
            } else {
                return undefined
            }
        }
    }
    return clone
}