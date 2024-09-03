const isValid = (date) => {
    if (new Date(date).toString() === "Invalid Date") {
        return false
    }
    if (!(date instanceof Date) && typeof date !== 'number') {
        return false;
    }

    return true
}
const isAfter = (date_1, date_2) => new Date(date_1).getTime() > new Date(date_2).getTime()
const isBefore = (date_1, date_2) => isAfter(date_2, date_1)
const isFuture = (date) => isValid(date) && isAfter(date,new Date())
const isPast = (date) => !isValid(date) && isBefore(date, new Date())