const input = document.querySelector("input")

const defaultText = document.getElementById("default")
const debounceText = document.getElementById("debounce")


input.addEventListener("input", (e) => {
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value);
});

const updateDebounceText = debounce(text => {
    debounceText.textContent = text
},100);

const debounce = (f, delay = 1000) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            f(...args)
        }, delay)
    }
}