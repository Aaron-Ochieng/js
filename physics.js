function getAcceleration(obj) {
    const { f, m, Δv, Δt } = obj;

    if (typeof f === "number" && typeof m !== "number") {
        return f / m;
    } else if (typeof Δv === "number" && typeof Δt === "number") {
        return Δv / Δt;
    } else {
        return "impossible";
    }
}
