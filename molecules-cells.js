const map = {
    "G": "C",
    "C": "G",
    "T": "C",
    "A": "T",
    "U": "A",
}

function RNA(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toUpperCase();
        if (char in map) {
            res += map[char];
        } else {
            res += char;
        }
    }
    return res;
}

function DNA(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toUpperCase();
        if (char in map) {
            res += map[char];
        } else {
            res += char;
        }
    }
    return res;
}

console.log(DNA('AUCG'))