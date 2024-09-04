// const test = ['Junior','Aaron']
const fiveonwards = (value) => typeof value === 'string' && value.length >= 5;
const longWords = arr => arr.every(fiveonwards)
// console.log(longWords(test))

// const test = ['Hamza', 'Aaron', 'Emmanuel', 'abraham', 'Abracadabra']
const tencharonwards = (value) => value.length >= 10;
const oneLongWord = arr => arr.some(tencharonwards)
// console.log(oneLongWord(test))

const ev = val => typeof val !== 'string' && val.length >= 7
const noLongWords = arr => arr.every(ev)