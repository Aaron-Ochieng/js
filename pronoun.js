const ex = 'Using Array Destructuring, you you can iterate through objects easily.'

const reference = {

    you: 'you',
    he: 'he',
    she: 'she',
    it: 'it',
    they: 'they',
    we: 'we',
}

const pronoun = (sentence) => {
    let result = {};
    const new_arr = sentence.split(' ');

    for (let i = 0; i < new_arr.length; i++) {
        const word = new_arr[i];
        if (reference[word]) {
            const nextWord = new_arr[i + 1]; 
            if (result[word]) {
                result[word].words.push(nextWord || '');
                result[word].count += 1;
            } else {
                result[word] = {
                    words: nextWord && !reference[nextWord] ? [nextWord] : [],
                    count: 1,
                };
            }
        }
    }
    return result;
}


console.log(pronoun(ex))