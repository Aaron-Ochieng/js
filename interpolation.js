function interpolation({
    step = 0,
    start = 0,
    end = 0,
    cb = () => { },
    duration = 0,
} = {}) {
    const delta = (end - start) / step;
    let current = start;
    let i = 0;
    const timer = setInterval(() => {
        if (i < step) {
            current += delta;
            i++;
        } else {
            clearInterval(timer);
            cb([current, duration]);
        }
    }, duration / step);
}