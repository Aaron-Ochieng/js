function words(word) {
    return word.split('');
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
    return  [a,...arr.slice(1)].join('')
}
// console.log(whisper("the quick brown fox jumped over the lazy dog"))
