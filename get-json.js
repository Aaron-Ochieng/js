async function getJSON(path, params) {
    let formatted_params = ""
    for (const [key, value] of Object.entries(params)) {
        formatted_params += `${key}=${value}&`.replaceAll(" ", "+")
    }
    let url = `${path}?${formatted_params.slice(0, -1)}`

    return await fetch(url).then(response => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
    }).then(json => {
        if (json["data"]) return json["data"]
        if (json["error"]) throw new Error(json["error"])
    })
}