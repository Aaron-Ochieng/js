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

function lastIndexOf(arr, val) {
    // let r = -1
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === val) return i
    }
    return -1;
}



function includes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true
    }
    return false
}
// console.log(lastIndexOf([0, 0, 't', 't'], 't', 3))