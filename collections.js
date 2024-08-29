

const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join("");
const setToArr = (set) => [...set];
const setToStr = (set) => setToArr(set).join("");
const strToArr = (str) => str.split('');
const strToSet = (str) => new Set(str);
const mapToObj = (map) => {

        const obj = {};
            for (let [Key, value] of map) {
                        obj[Key] = value;

            }
                return obj
}

const objToArr = (obj) => {
        let arr = [];
            for (let [key, value] of Object.entries(obj)){
                        arr.push(value);
            }

                return arr;
}

const objToMap = (obj) => {
        const map = new Map();

            for (let [key, value] of Object.entries(obj)) {
                        map.set(key, value);
            }

                return map;
}

const arrToObj = (arr) => {
        const obj = {};

            for (let i = 0; i < arr.length; i++) {
                        obj[i] = arr[i];
            }
                return obj;
}

const strToObj = (str) => {
        const obj = {};

            for (let i = 0; i < str.length; i++) {
                        obj[i] = str[i];
            }

                return obj;
}

const superTypeOf = (n) => {
        if (n === null) {
                    return "null";
        }
            if (n == undefined) {
                        return "undefined";
            }
                const obj = Object.prototype.toString.call(n)
                    return obj.slice(8, -1);
}