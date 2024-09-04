const  every=(array, tst)=> {
    for (var i = 0; i < array.length; i++) {
        if (!tst(array[i])) return false;
    }
    return true;
}

const some = (array, tst) =>{
    for (var i = 0; i < array.length; i++) {
        if (tst(array[i])) return true;
    }
    return false;
}

const none = (array, tst) =>{
    return !some(array, tst);
}
