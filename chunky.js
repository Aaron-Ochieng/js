function chunk(arr, size) {
    let re = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        if (temp.length === size) {
            re.push(temp);
            temp = [];
        }
    }
    if (temp.length > 0) {
        re.push(temp);
    }
    return re;
}



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(chunk(arr, 2))