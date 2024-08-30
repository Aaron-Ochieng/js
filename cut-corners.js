// const nums = [3.7, -3.7, 3.1, -3.1]

// console.log( [].concat(-3.7).join(''))

function round(arr) {
    let result = [];
    for (let k = 0; k < arr.length; k++) {
        let temp = "";
        let numStr = arr[k] + "";

        let decimalIndex = numStr.indexOf(".");

        if (decimalIndex !== -1) {
            temp = numStr.slice(0, decimalIndex);


            if (Number(numStr[decimalIndex + 1]) >= 5) {
                result.push(Number(temp) < 0 ? Number(temp) - 1 : Number(temp) + 1);
            } else {
                result.push(Number(temp));
            }
        } else {
            result.push(Number(numStr));
        }
    }
    return result;
}

function ceil(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = "";
        let numStr = arr[i] + "";
        let decimalIndex = numStr.indexOf(".");

        if (decimalIndex !== -1) {
            temp = numStr.slice(0, decimalIndex);
            if (Number(numStr.slice(decimalIndex + 1)) > 0) {
                result.push(Number(temp) < 0 ? Number(temp) : Number(temp) + 1);
            } else {
                result.push(Number(temp));
            }
        } else {
            result.push(Number(numStr));
        }
    }
    return result;
}



function floor(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = "";
        let numStr = arr[i] + "";

        let decimalIndex = numStr.indexOf(".");

        if (decimalIndex !== -1) {
            temp = numStr.slice(0, decimalIndex);


            if (Number(numStr.slice(decimalIndex + 1)) > 0 && Number(temp) < 0) {
                result.push(Number(temp) - 1);
            } else {
                result.push(Number(temp));
            }
        } else {

            result.push(Number(numStr));
        }
    }

    return result;
}


function trunc(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = "";
        let numStr = arr[i] + "";

        let decimalIndex = numStr.indexOf(".");

        if (decimalIndex !== -1) {
            temp = numStr.slice(0, decimalIndex);
            result.push(Number(temp));
        } else {
            result.push(Number(numStr));
        }
    }

    return result;
}
// console.log(round(9.9))