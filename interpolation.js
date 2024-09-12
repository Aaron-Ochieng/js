const interpolation = ({
    step = 0,
    start = 0,
    end = 0,
    cb = () => { },
    duration = 0,
} = {}) => {
    const delta = (end - start) / step;
    let current = start;
    let i = 0;
    const timer = setInterval(() => {
        if (i < step) {
            cb([current, (duration / step) * (i + 1)]);
            current += delta;
            i++;
        } else {
            clearInterval(timer);
        }
    }, duration / step);
}