const mult2=(x)=> {
    return (y) => x * y;
}

const add3=(x)=> {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}

const sub4=(a)=> {
    return function (b) {
        return function (c) {
            return function (d) {
                return a - b - c - d;
            };
        };
    };
}
