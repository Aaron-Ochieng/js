async function isWinner(country) {
    let err = false
    const wn_countries = await db.getWinner(country).catch(() => err = true)
    if (err) return `${country} never was a winner`
    if (!wn_countries) return `${country} never was a winner`
    if (wn_countries.continent !== "Europe") return `${country} is not what we are looking for because of the continent`
    const wn_results = await db.getResults(wn_countries.id)
    if (wn_results.length < 3) return `${country} is not what we are looking for because of the number of times it was champion`
    let years = ""
    let results = ""
    for (const result of wn_results) {
        years += `${result.year}, `
        results += `${result.score}, `
    }
    return `${country} won the FIFA World Cup in ${years.slice(0, -2)} winning by ${results.slice(0, -2)}`
}