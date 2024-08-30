function vowelDots(str) {
    const vowels = /[aeiou]/g;
    return str.replace(vowels, '$&.');
}

// console.log(vowelDots("Aaron Ochieng"))