// const a = ['Aaron', 'John', 'barsulai', 'Emmanuel']
const filterShortStateName = arr => arr.filter(item => item.length < 7)
const filterStartVowel = arr => arr.filter((item) => /^[aeiou]/i.test(item))
const filter5Vowels = arr => arr.filter((item) => item.match(/[aeiou]/gi).length >= 5);
const filter1DistinctVowel = arr => arr.filter((item) => new Set(item.toLowerCase().match(/[aeiou]/gi)).size === 1)

const capital = item => item.capital.length >= 8;
const nm = item => !/^[aeiou]/i.test(item.name);
const tag = item => /[aeiou]/i.test(item.tag);
const region = item => item.region !== "South";
//
const multiFilter = arr => {
    arr = arr.filter((item) => {
        return capital(item) && nm(item) && tag(item) && region(item);
    });
    return arr;
}