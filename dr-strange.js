const day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"]
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
function addWeek(date) {
    const epoch = new Date('0001-01-01')
    const days_since_epoch = Math.floor((date - epoch) / (1000 * 60 * 60 * 24));
    const index = days_since_epoch % 14
    return day_names[index]
}


function timeTravel(x) {
    const formattedDate = new Date(x.date);
    formattedDate.setHours(x.hour);
    formattedDate.setMinutes(x.minute);
    formattedDate.setSeconds(x.second);
    return formattedDate.toString();
}

// console.log(addWeek(new Date('2025-08-11')))
// console.log(timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString())

