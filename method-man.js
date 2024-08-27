function words(word) {
    return word.split(' ');
}


function sentence(arr){
    return arr.join(" ")
}

function yell(str){
    return str.toUpperCase()
}


function whisper(str){
    return "*" + str.toLowerCase() + "*"
}

function capitalize(str){
    const arr =  str.split('')
    const a = arr[0].toUpperCase()
    const a2 = [...arr.slice(1)].join('').toLowerCase()
    return  a+a2
}
// console.log(capitalize('STR'))
