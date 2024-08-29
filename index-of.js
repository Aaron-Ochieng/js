function indexOf(arr, val, optional) {
    if (optional) {
        for (let i = optional; i < arr.length; i++) {
            if (arr[i] === val) return i
        }
        return -1
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1
}

function lastIndexOf(arr, val, optional) {
    let startIndex = optional !== undefined ? optional : arr.length - 1;
    for (let i = startIndex; i >= 0; i--) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}



function includes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true
    }
    return false
}
console.log(lastIndexOf(['t', 0, 0,'t'], 't', 2))