
const array1 = [1, 2, 3, 4];
const adder = arr => {
    const sum = 0
    return arr.reduce((a, b) =>
        a + b,
        sum,
    );
}

const sumOrMul = arr => {
    return arr.reduce(
        (acc, item) => {
            if (item % 2 === 0) {
                return acc * item;
            } else {
                return acc + item;
            }
        },
        value === undefined ? 0 : value
    );
}


const funcExec = (arr, value) => {
    return arr.reduce(
        (acc, item) => {
            if (typeof item === "function") {
                return item(acc, value);
            } else {
                return acc;
            }
        },
        value === undefined ? 0 : value
    );
}
// console.log(adder(array1))