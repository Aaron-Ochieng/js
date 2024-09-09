const person = {
    firstName: "John",
    lastname: "Doe",
    age: "50",
    eyecolor: "blue"
}


const invert = obj => {
    const invertedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            invertedObj[obj[key]] = key;
        }
    }
    return invertedObj;
}
console.log(invert(person))