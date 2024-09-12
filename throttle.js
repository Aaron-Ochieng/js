function throttle(func, wait) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= wait) {
            lastCall = now;
            return func(...args);
        }
    };
}
function opThrottle(func, wait, options = { leading: true, trailing: true }) {
    let lastCall = 0;
    let timeout = null;
    let lastArgs = null;
    let lastThis = null;
    let result = null;

    function invokeFunc() {
        lastCall = Date.now();
        timeout = null;
        result = func.apply(lastThis, lastArgs);
        lastArgs = lastThis = null;
    }

    return function (...args) {
        const now = Date.now();
        const isInvoking = now - lastCall >= wait;

        lastArgs = args;
        lastThis = this;

        if (isInvoking) {
            if (options.leading) {
                result = func.apply(this, args);
            }
            lastCall = now;
        } else if (options.trailing) {
            clearTimeout(timeout);
            timeout = setTimeout(invokeFunc, wait);
        }
        return result;
    };
}
