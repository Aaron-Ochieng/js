function nasa(num) {
    if (typeof num === "number") {
        if (num % 5 === 0 && num % 3 === 0) {
            return "NASA"
        }
        if (num % 3 === 0) {
            return "NA"
        }
        if (num % 5 === 0) {
            return "SA"
        }
    }
}