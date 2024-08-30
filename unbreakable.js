function split(string, by) {
    if (typeof string === "string") {
        let res = []
        if (!by) res.push(string)
        if (by === '') res.push(...string)
        if (by) {
            let temp = ""
            const len = by.length
            for (let i = 0; i < string.length; i++) {
                if (string.slice(i, i + len) === by) {
                    res.push(temp)
                    temp = ""
                    i = i + len - 1
                } else {
                    temp = temp + string[i]
                }
            }
            if (temp !== "") {
                res.push(temp)
                temp = ""
            }
        }
        return res
    }
}

function join(arr, by) {
    if (Array.isArray(arr)) {
        let res = ""
        if (!by) {
            for (let i = 0; i < arr.length; i++) {
                if (i != arr.length - 1) {
                    if (arr[i] === null) {
                        res = res + by
                    } else {
                        res = res + arr[i] + ","
                    }
                } else {
                    if (arr[i] !== null) {
                        res = res + arr[i]
                    }
                }
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (i != arr.length - 1) {
                if (arr[i] === null) {
                    res = res + by
                } else {
                    res = res + arr[i] + by
                }
            } else {
                if (arr[i] !== null) {
                    res = res + arr[i]
                }
            }
        }
        return res
    }
}

const arr1 = [1, 2, null, 4]
const arr2 = [5, 6, 7, 6]

console.log(typeof arr1)
console.log(arr1.join("*"))
console.log(join(arr1, "*"))
