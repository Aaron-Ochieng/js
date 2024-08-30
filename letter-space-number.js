function letterSpaceNumber(str) {
    const exprr = /([a-zA-Z]) (\d)(?!\d)/g;
    let matches = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
        matches.push(`${match[1]} ${match[2]}`);
    }
    return matches;
}