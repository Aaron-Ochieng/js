const day_names = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"]
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
function addWeek(date) {
    const index = date.getDate()
    return index > 13 ? (day_names[(index - 1) % 14]) : day_names[index - 1]
}


function timeTravel(x) {
    const formattedDate = new Date(x.date);
    formattedDate.setHours(x.hour);
    formattedDate.setMinutes(x.minute);
    formattedDate.setSeconds(x.second);   
    return formattedDate.toString();
}


console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString())
  
