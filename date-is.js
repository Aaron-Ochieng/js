const isValid = (date) => Date.parse(date) ? true : false
const isAfter = (date_1, date_2) => Date.parse(date_1) > Date.parse(date_2)
const isBefore = (date_1, date_2) => !isAfter(date_1, date_2)
const isFuture = (date) => date > new Date()
const isPast = (date) => !isFuture(date)
// console.log(isFuture(new Date('08-08-2030')))