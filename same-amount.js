function sameAmount(str, regex1, regex2) {
    return number_of_matches(str, regex1) === number_of_matches(str, regex2);
}

function number_of_matches(string, regex) {
    const matches = string.match(new RegExp(regex.source, 'g'))
    return matches ? matches.length : 0
}

// console.log(sameAmount("abc123", /a/g, /\d/g));  