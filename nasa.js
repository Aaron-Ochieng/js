function nasa(num) {
    if (typeof num === "number") {
        let result = [];
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                result.push("NASA");
            } else if (i % 3 === 0) {
                result.push("NA");
            } else if (i % 5 === 0) {
                result.push("SA");
            } else {
                result.push(i.toString());
            }
        }
        return result.join(" ");
    }
}