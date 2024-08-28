function getAcceleration(obj) {

    if (typeof obj.f === "number" && typeof obj.m !== "number" && !!obj.f && !!obj.m) {
        return f / m;
    } else if (typeof obj.Δv === "number" && typeof obj.Δt === "number" && !!obj.Δv && !!Δt) {
        return Δv / Δt;
    }
    return "impossible";
}

// console.log(getAcceleration({ d: 10, f: 2, Δv: 100 }))