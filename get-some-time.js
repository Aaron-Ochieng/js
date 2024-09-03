const firstDayWeek = (week, year) => {
    // Convert the year to a number
    year = parseInt(year, 10);

    // Create a Date object for January 1st of the given year
    const firstOfJan = new Date(year, 0, 1);

    // Calculate the number of days to the first Monday of the year
    const daysToMonday = (8 - firstOfJan.getDay()) % 7;

    // Calculate the first Monday of the year
    const firstMonday = new Date(year, 0, 1 + daysToMonday);

    // Calculate the start date of the requested week
    const startOfWeek = new Date(firstMonday);
    startOfWeek.setDate(firstMonday.getDate() + (week - 1) * 7);

    // If the start of the week is in the previous year, return the first day of the specified year
    if (startOfWeek.getFullYear() < year) {
        return firstOfJan.toLocaleDateString('en-GB').split('/').reverse().join('-');
    }

    // Format the date in dd-mm-yyyy
    return startOfWeek.toLocaleDateString('en-GB').split('/').reverse().join('-');
}