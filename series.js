async function series(async_funcs) {
    let results = []
    if (!async_funcs.length) return []
    results[0] = await async_funcs[0]()
    for (let i = 1; i < async_funcs.length; i ++) {
        Promise.resolve(results[i] = await async_funcs[i]())
    }
    return results
}