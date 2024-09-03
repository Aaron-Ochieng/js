const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


const isLeapYear = (date) => ((date % 4 === 0 && date % 100 !== 0) || (date % 400 === 0))

const dayOfTheYear = (date) => {
    const month = date.getMonth(); // Get the month index (0-11)
    const day = date.getDate();    // Get the day of the month
    const year = date.getFullYear(); // Get the year
    let dayOfYear = day; // Start with the current day of the month
    // Sum the days of the months before the current month
    for (let i = 0; i < month; i++) {
        dayOfYear += days[i];
    }
    // Add one more day if it's a leap year and after February
    if (isLeapYear(year) && month > 1) {
        dayOfYear += 1;
    }

    return dayOfYear;
}
