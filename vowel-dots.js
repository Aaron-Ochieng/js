const vowels = /[aeiouAEIOU]/g;
function vowelDots(str) {
    return str.replace(vowels, '$&.');
}

// console.log(vowelDots("Aaron Ochieng"))