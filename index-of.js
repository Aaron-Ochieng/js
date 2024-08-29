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
    const searchArray = optional ? arr.slice(optional) : arr;
    for (let i = searchArray.length - 1; i >= 0; i--) {
        if (searchArray[i] === val) return i
    }
    return -1;
}



function includes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true
    }
    return false
}

// console.log(lastIndexOf(['t', 0, 0, 't','t'], 't', 2))