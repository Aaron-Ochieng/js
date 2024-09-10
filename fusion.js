const obj1 = { arr: [1, "2"] }; const obj2 = { arr: [2] }
const test1 = { arr: [], arr1: [5] }; const test2 = { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }
const testStr = { str: "salem" }; const testStr2 = { str: "alem" }
const aaaa = { nbr: 'hello' }; const bbbb = { nbr: 'there' }

// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//     console.log(typeof value)
// }

const fusion = (obj1, obj2) => {
    for (let key in obj2) {
        if (key in obj1) {
            if (is.arr(obj1[key]) && is.arr(obj2[key])) {
                obj1[key] = [...obj1, ...obj2] // Corrected recursive call
            } else if (is.obj(obj1[key])  && is.obj(obj2[key])) {
                obj1[key] = fusion(obj1[key], obj2[key]); // Properly initializing valX
            } else if (is.num(obj1[key]) && is.num(obj2[key])) {
                obj1[key] +=  obj2[key]; // Properly initializing valX
            } else if (is.str(obj1[key]) && is.str(obj2[key])) {
                obj1[key] += " " + obj2[key]; // Properly initializing valX
            } else {
                obj1[key] = obj2[key]
            }
        } else {
            obj1[key] = obj2[key]
        }
        
    }

    return obj1
}


const is = {};
is.num = (n) => typeof n === "number";
is.str = (n) => typeof n === "string";
is.arr = (n) => Array.isArray(n);
is.obj = (n) => typeof n === "object" && !is.fun(n) && !is.arr(n) && n !== null;
is.fun = (n) => typeof n === "function";

console.log(fusion({ a: { b: 1 } }, { a: 1 , x : []}))
console.assert(
    JSON.stringify(fusion({ a: { b: 1 } }, { a: 1 }).a) === JSON.stringify(1),
    "Test #10 Failed"
);