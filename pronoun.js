const ex = 'Using Array Destructuring, you you can iterate through objects easily.'

const reference = {

    you: 'you',
    he: 'he',
    she: 'she',
    it: 'it',
    they: 'they',
    we: 'we',
    i: 'i'
}

const pronoun = (sentence) => {
    let result = {};
    const new_arr = sentence.split('\n').join(' ').split(',').join(' ').split(' ').filter(val => val !== '');

    for (let i = 0; i < new_arr.length; i++) {
        const currentWord = new_arr[i].toLowerCase();
        const nextWord = new_arr[i + 1] ? new_arr[i + 1].toLowerCase() : '';

        if (reference[currentWord]) {
            if (!result[currentWord]) {
                result[currentWord] = {
                    word: [],
                    count: 0,
                };
            }

            if (nextWord && !reference[nextWord]) {
                result[currentWord].word.push(nextWord);
            }

            result[currentWord].count += 1;
        }
    }

    return result;
}


// console.log(pronoun(`The seal method seals an object, preventing new properties from being
// added to it and marking all existing properties as non-configurable. Values of present 
// properties can still be changed as long as they are writable.`))

// console.log(pronoun('I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'))
console.log(pronoun(`it i it she is gone`))