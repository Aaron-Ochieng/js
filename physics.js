function getAcceleration(obj) {
    const { f, m, Δv, Δt } = obj;

    if (f !== undefined && m !== undefined) {
        return f / m;
    } else if (Δv !== undefined && Δt !== undefined) {
        return Δv / Δt;
    } else {
        return "impossible";
    }
}
