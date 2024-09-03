

const isFriday = (date) => new Date(date).getDay() === 5;
const isWeekend = (date) => {
    var day = new Date(date).getDay();
    return day === 0 || day === 6
};
const isLeapYear = (date) => {
    var year = new Date(date).getFullYear();
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
};



const isLastDayOfMonth = (date) => {
    var dy = new Date(date);
    return (
        new Date(dy.getFullYear(), dy.getMonth() + 1, 0).getDate() === dy.getDate()
    );
}