const filter = (arr, fn) => {
    var re = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}

const reject = (arr, fn) =>{
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (!fn(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
}

const partition=(arr, fn)=> {
    return [filter(arr, fn), reject(arr, fn)];
}
