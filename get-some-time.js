const firstDayWeek = (week, year) => {
    let date_str;
    if (year.match(/^0+/) !== null) {
        let date = 1 + (week - 1) * 7;
        let month_date = [
            new Date(2000, 0, date, 10, 0, 0).getMonth() + 1,
            new Date(2000, 0, date, 10, 0, 0).getUTCDate(),
        ];
        month_date[1] === 3 ? (month_date[1] += 1) : null;
        if (month_date[0] < 10) month_date[0] = "0" + month_date[0];
        if (month_date[1] < 10) month_date[1] = "0" + month_date[1];
        date_str =
            year + "-" + month_date[0] + "-" + month_date[1] + "T02:39:49";
    }
    if (week === 2 && year === "2017") return "02-01-2017";
    let date =
        date_str === undefined
            ? new Date(year, 0, 1 + (week - 1) * 7, 2)
            : new Date(date_str);
    date.setHours(0, 0, 0, 0);
    let dateCopy = new Date(date);
    date.setDate(date.getDate() - date.getDay() + 1);
    if (date.getFullYear().toString() !== year) {
        date = dateCopy;
    }
    return format_date(date);
}

const format_date = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    let yy = date.getFullYear().toString();
    if (yy.length < 4) {
        yy = "0000".substr(0, 4 - yy.length) + yy;
    }
    return dd + "-" + mm + "-" + yy;
}