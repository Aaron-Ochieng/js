const countLeapYears = (date) => {
    const index = date.getFullYear();
    let count = 0

    for (let i = 1; i <= index; i++) {
        if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
            count++
        }
    }
    return count - 1
}

// console.log(countLeapYears(new Date()))
console.log(countLeapYears(new Date('1664-08-09')))