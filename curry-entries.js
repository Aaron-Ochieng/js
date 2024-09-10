const defaultCurry = (obj1) => {
    return function (obj2) {
        let res = {};
        for (let key in obj1) {
            res[key] = obj1[key];
        }
        for (let key in obj2) {
            res[key] = obj2[key];
        }
        return res;
    };
}

const mapCurry = (func) => {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            res[func([key, obj2[key]])[0]] = func([key, obj2[key]])[1];
        }
        return res;
    };
}

const reduceCurry = (obj1) => {
    return function (obj2, obj3) {
        let res = obj3;
        for (let key in obj2) {
            res = obj1(res, [key, obj2[key]]);
        }
        return res;
    };
}

const filterCurry = (obj1) => {
    return function (obj2) {
        let res = {};
        for (let key in obj2) {
            if (obj1([key, obj2[key]])) {
                res[key] = obj2[key];
            }
        }
        return res;
    };
}

const reduceScore = (obj1, obj2) => {
    return reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj1, obj2);
}

const filterForce = (obj) => {
    return filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj);
}

const mapAverage = (obj) => {
    let avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj);
    for (let key in avgScores) {
        obj[key].averageScore = avgScores[key];
    }
    return obj;
}