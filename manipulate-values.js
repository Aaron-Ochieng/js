const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }


const filterValues = (obj, fn) => {
    var res = {};
    for (const key in obj) {
        if (fn(obj[key], key, obj)) {
            res[key] = obj[key]
        }
    }
    return res;
}
console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))

const mapValues = (obj, fn) => {
    let res = {};
    for (const key in obj) {
        res[key] = fn(obj[key], key, obj)
    }
    return res;
}
console.log(mapValues(nutrients, (v) => v + 1))

const reduceValues = (obj, fn) => {
    let acc = 0;
    for (let key in obj) {
        acc = fn(acc, obj[key], key, obj);
    }
    return acc;
}
console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
