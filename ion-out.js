const expr = new RegExp(/\s+/)
function ionOut(inputString) {
    // Split the input string into an array of words
    const arr_of_words = inputString.split(expr);
    // Initialize an empty array to store the result
    const result = [];
    arr_of_words.forEach(word => {
        const index = word.indexOf('tion');
        if (index !== -1) {
            result.push(word.slice(0, index));
        }
    });

    return result;
}
