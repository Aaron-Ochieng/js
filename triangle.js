function triangle(string, number) {
    let result = ""

    for (let i = 1; i <= number; i++) {
        result += string.repeat(i) + "\n";
    }
    return result.slice(0, result.length - 1)
}

// console.log(triangle("*", 5))