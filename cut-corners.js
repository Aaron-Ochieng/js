// const nums = [3.7, -3.7, 3.1, -3.1]

// console.log( [].concat(-3.7).join(''))

function round(number) {
    let integer_part = 0;
    let fractional_part;
    
    // Extract the integer part
    if (number < 0) {
        while (number <= -1) {
            number += 1;
            integer_part--;
        }
    } else {
        while (number >= 1) {
            number -= 1;
            integer_part++;
        }
    }
    
    // Calculate the fractional part
    fractional_part = number;

    // Adjust rounding based on the fractional part
    if (fractional_part >= 0.5 && number >= 0) {
        integer_part += 1;
    } else if (fractional_part <= -0.5 && number < 0) {
        integer_part -= 1;
    }

    return integer_part;
}

function floor(number) {
    let integer_part = 0;

    if (number < 0) {
        while (number <= -1) {
            number += 1;
            integer_part--;
        }
    
        if (number !== 0) {
            integer_part -= 1;
        }
    } else {
        while (number >= 1) {
            number -= 1;
            integer_part++;
        }
    }

    return integer_part;
}

function trunc(number) {
    let integer_part = 0;

    if (number > 0xfffffffff) {
        number -= 0xfffffffff;
        integer_part += 0xfffffffff;
    }
    
    let is_negative = number < 0;

    if (is_negative) {
        number = -number;
    }

    while (number >= 1) {
        number -= 1;
        integer_part++;
    }

    return is_negative ? -integer_part : integer_part;
}

function ceil(number) {
    let integer_part = trunc(number);
    let fractional_part = number - integer_part;

    // If there's any fractional part, adjust the integer part for positive numbers
    if (fractional_part > 0) {
        integer_part += 1;
    }

    return integer_part;
}

// console.log(ceil(-3.9));

// console.log(round(9.9))