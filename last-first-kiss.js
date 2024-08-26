function first(arr) {
    return arr[0]
}


function last(arr) {
    return arr[arr.length - 1]
}

function kiss(arr) {
    const slice = []
    slice.push(arr[arr.length-1])
    slice.push(arr[0])
    return slice
}

console.log(first("Aaron"))
console.log(last("Aaron"))
console.log(kiss(["Abraham","Emmanuel","Hamza"]))