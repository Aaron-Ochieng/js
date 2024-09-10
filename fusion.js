const obj1 = { arr: [1, "2"] }; const obj2 = { arr: [2] }
const test1 = { arr: [], arr1: [5] }; const test2 = { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }
const testStr = { str: "salem" }; const testStr2 = { str: "alem" }

// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//     console.log(typeof value)
// }

const fusion = (...obj) => {
    let result = {};
    for (let i = 0; i < obj.length; i++) {
        for (const [key, value] of Object.entries(obj[i])) {
            let valX = result[key];

            if (is.obj(value)) {
                result[key] = fusion(valX || {}, value); // Corrected recursive call
            } else if (is.arr(value)) {
                result[key] = (valX || []).concat(value); // Properly initializing valX
            } else if (is.num(value)) {
                result[key] = (valX || 0) + value; // Properly initializing valX
            } else if (is.str(value)) {
                result[key] = (valX || "") + " " + value; // Properly initializing valX
            } else {
                result[key] = value;
            }
        }
    }
    console.log(result);
}


const is = {};
is.num = (n) => typeof n === "number";
is.str = (n) => typeof n === "string";
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === "object" && !is.fun(n) && !is.arr(n) && n !== null;
is.fun = (n) => typeof n === "function";

fusion(test1, test2)