const citiesOnly = arr => {
    return arr.map((item) => item.city);
}
// const x = ['alabama', 'new jersey']
const upperCasingStates = arr => {
    return arr.map((item) =>
        item
            .split(" ")
            .map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            .join(" ")
    );
}

// console.log(upperCasingStates(x))
// const test = ['68°F', '59°F', '25°F']
const fahrenheitToCelsius = arr => {
    return arr.map(
        (item) =>
            Math.floor((Number(item.slice(0, -2)) - 32) * (5 / 9)).toString() +
            "°C"
    );
}
// console.log(fahrenheitToCelsius(test))

const trimTemp = (arr) => {
    return arr.map((item) => {
        item.temperature = item.temperature.replaceAll(" ", "");
        return item;
    });
}

const tempForecasts = (arr) => {
    return arr.map((item) => {
        return `${Math.floor(
            (Number(item.temperature.slice(0, -2)) - 32) * (5 / 9)
        ).toString() + "°Celsius"
            } in ${item.city}, ${item.state
                .split(" ")
                .map((word) => {
                    return word[0].toUpperCase() + word.slice(1);
                })
                .join(" ")}`;
    });
}