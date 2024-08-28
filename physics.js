function getAcceleration(obj) {

    if (typeof obj.f === "number" && typeof obj.m === "number") {
        return obj.f / obj.m;
    } else if (typeof obj.Δv === "number" && typeof obj.Δt === "number") {
        return obj.Δv / obj.Δt;
    }
    return "impossible";
}

// console.log(getAcceleration({ f: 10, m: 5 }))