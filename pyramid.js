function pyramid(string, value) {
    let result = "";

    for (let i = 1; i <= value; i++) {
        const numChars = 2 * i - 1; // Number of characters for the current row
        const numSpaces = value - i; // Number of leading spaces

        // Generate the current row
        const row = ' '.repeat(numSpaces) + string.repeat(numChars);

        result += row + "\n";
    }
    return result.slice(0, result.length - 1);
}

console.log(pyramid("*", 5))