const replica = (target, ...sources) => {
    sources.forEach((source) => {
        Object.keys(source).forEach((key) => {
            if (is.obj(source[key])) {
                if (!target.hasOwnProperty(key) || !isObj(target[key])) {
                    target[key] = {};
                }
                replica(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        });
    });
    return target;
}

const isFun = val => typeof val === 'function';
const isArr = val => Array.isArray(val);
const isObj = val => typeof val === 'object' && !isFun(val) && !isArr(val) && val !== null && !(val instanceof RegExp);