function letterSpaceNumber(str) {
    const exprr = /([a-zA-Z]) (\d)(?![a-zA-Z0-9])/g;
    let matches = [];
    let match;
    while ((match = exprr.exec(str)) !== null) {
        matches.push(`${match[1]} ${match[2]}`);
    }
    return matches;
}