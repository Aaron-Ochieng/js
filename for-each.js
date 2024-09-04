const forEach = (arr, ac) => {
    for (let i = 0; i < arr.length; i++) {
        ac(arr[i], i, arr);
    }
}