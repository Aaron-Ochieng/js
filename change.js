function get(index) {
    return index in sourceObject[index] ? sourceObject[index] : undefined;
}

function set(index, value) {
    sourceObject[index] = value;
    return key
}