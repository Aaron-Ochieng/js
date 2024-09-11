const neuron = (arr) => {
    const result = new Object
    arr.map(sentence => {
        const first = sentence.split(" - Response: ")[0]
        const response = sentence.split(" - Response: ")[1]
        const firstKey = first.slice(0, first.indexOf(":")).toLowerCase()
        const firstValue = first.slice(first.indexOf(":") + 2)
        let firstValueKey = ""
        for (let i = 0; i < firstValue.length; i++) {
            if (firstValue.charCodeAt(i) === 32) firstValueKey += "_"
            if (firstValue.toLowerCase().charCodeAt(i) >= 97 && firstValue.toLowerCase().charCodeAt(i) <= 122) firstValueKey += firstValue.at(i).toLowerCase()
        }
        if (!result[firstKey]) result[firstKey] = new Object
        if (!result[firstKey][firstValueKey]) {
            result[firstKey][firstValueKey] = new Object
            result[firstKey][firstValueKey][firstKey.slice(0, -1)] = firstValue
        }
        if (!result[firstKey][firstValueKey]["responses"]) result[firstKey][firstValueKey]["responses"] = new Array
        result[firstKey][firstValueKey]["responses"].push(response)
    })
    return result
}