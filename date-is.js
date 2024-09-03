const isValid = (date) => {
    if (new Date(date).toDateString() === "Invalid Date") {
        return false
    }
    if (!(date instanceof Date) && !isNaN(date.getTime())) {
        return false;
    }

    return true
}
const isAfter = (date_1, date_2) => Date.parse(date_1) > Date.parse(date_2)
const isBefore = (date_1, date_2) => !isAfter(date_1, date_2)
const isFuture = (date) => date > new Date()
const isPast = (date) => !isFuture(date)
// console.log(isFuture(new Date('08-08-2030')))
// console.log((new Date('1995-12-17T03:24:00').getTime()))
// console.log(isValid(''))
// console.log(isValid(new Date('1995-12-17T03:24:00')))