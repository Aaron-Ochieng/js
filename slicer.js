function slice(input, start, end) {
    start = start < 0 ? Math.max(input.length + start, 0) : start;
    end = end === undefined || end > input.length ? input.length : end;
    end = end < 0 ? Math.max(input.length + end, 0) : end;
    let result = typeof input === 'string' ? '' : [];
    for (let i = start; i < end; i++) {
        if (typeof input === 'string') {
            result += input[i];
        } else {
            result.push(input[i]);
        }
    }
    return result;
}



// console.log(slice('abcdef', -2))