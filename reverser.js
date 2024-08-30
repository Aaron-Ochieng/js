// const a = ["Aaron", "Ochieng"];


// const b = new Array(null)

function reverse(value) {
    if (typeof value === "string") {
        let res = ""

        for (let i = value.length - 1; i >= 0; i--) {
            res = res + value[i]
        }
        return res
    }

    if (typeof value === "object"){
        let res = []
        for (let i = value.length - 1; i >= 0; i--) {
            res.push(value[i])
        }
        return res
    }
}


// console.log(b)