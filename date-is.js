const isValid = (date) => {
    if (new Date(date).toString() === "Invalid Date") {
        return false
    }
    if (!(date instanceof Date) && typeof date !== 'number') {
        return false;
    }

    return true
}
const isAfter = (date_1, date_2) => Date.parse(date_1) > Date.parse(date_2)
const isBefore = (date_1, date_2) => !isAfter(date_1, date_2)
const isFuture = (date) => date > new Date()
const isPast = (date) => !isFuture(date)