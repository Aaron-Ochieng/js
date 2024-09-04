const map = (arr, log) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(log(arr[i], i, arr));
    }
    return res;
}

const flatMap = (arr, log) => {
    return arr.reduce(
        (acc, val, i, arr) => acc.concat(log(val, i, arr)),
        []
    );
}