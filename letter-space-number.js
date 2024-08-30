function letterSpaceNumber(str) {
    const exprr = /([a-zA-Z]) (\d)(?!\d)/g;
    let matches = [];
    let match;
    while ((match = exprr.exec(str)) !== null) {
        matches.push(`${match[1]} ${match[2]}`);
    }
    return matches;
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))