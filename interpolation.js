// Nkt 3rd snapping 

const interpolation = (obj) => {
    const { step, start, end, callback, duration } = obj
    let i = 0
    const interval = duration / step
    let timer = setInterval(() => {
        callback([((end - start) / step * i) + start, interval * (i + 1)])
        i++
        if (i === step) clearInterval(timer)
    }, interval)
}