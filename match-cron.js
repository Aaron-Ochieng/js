const matchCron = (cron, date) => {
    let Cron = {};
    cron.split(" ").forEach((cr, index) => {
        if (cr === "*") return;
        if (index === 0) {
            Cron.minute = cr;
        } else if (index === 1) {
            Cron.hour = cr;
        } else if (index === 2) {
            Cron.date = cr;
        } else if (index === 3) {
            cron.month = cr;
        } else if (index === 4) {
            cron.day = cr;
        }
    })

    date = {
        minute: date.getMinutes(),
        hour: date.getHours(),
        date: date.getDate(),
        month: date.getMonth() + 1,
        day: date.getDay(),
    };
    for (let key in Cron) {
        if (Cron[key] !== date[key].toString()) {
            return false;
        }
    }
    return true;
}

// console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00')))
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')))