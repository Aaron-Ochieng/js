
async function all(promises) {
    if (!promises) return {}
    let obj = new Object
    let err
    for (const [key, value] of Object.entries(promises)) {
        if (typeof value != "object") {
            obj[key] = value
            continue
        }
        await value.then(res => obj[key] = res).catch((error) => err = error)
    }
    if (err) throw err
    return obj
}