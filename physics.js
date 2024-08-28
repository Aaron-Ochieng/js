function getAcceleration(obj) {
    const { f, m, v, t } = obj;

    if (f !== undefined && m !== undefined) {
        return f / m;
    } else if (v !== undefined && t !== undefined) {
        return v / t;
    } else {
        return "impossible";
    }
}
