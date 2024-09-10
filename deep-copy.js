const deepCopy = (input) => {
    if (Array.isArray(input)) {
        var res = [];
        for (var i = 0; i < input.length; i++) {
            res[i] = deepCopy(input[i]);
        }
        return res;
    } else if (isDefenitelyAnObject(input)) {
        var res = {};
        for (var key in input) {
            res[key] = deepCopy(input[key]);
        }
        return res;
    } else {
        return input;
    }
}

const isDefenitelyAnObject = (input) => {
    return (
        typeof input === "object" &&
        !(typeof input === "function") &&
        !Array.isArray(input) &&
        input !== null &&
        !(input instanceof RegExp)
    );
}