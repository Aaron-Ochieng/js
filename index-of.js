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
    let res = -1
    if (optional) {
        for (let i = optional; i < arr.length; i++) {
            if (arr[i] === val) res = i
        }
        return res
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) res = i
    }
    return res
}


function includes(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return true
    }
    return false
}