export const getArchitects = () => {
    return [
        document.querySelectorAll("body a"),
        document.querySelectorAll("body span"),
    ];
}

export const getClassical = () => {
    return [
        document.querySelectorAll("a.classical"),
        document.querySelectorAll("a:not(.classical)"),
    ];
}

export const getActive = () => {
    return [
        document.querySelectorAll("a.classical.active"),
        document.querySelectorAll("a.classical:not(.active)"),
    ];
}

export const getBonannoPisano = () => {
    return [
        document.getElementById("BonannoPisano"),
        document.querySelectorAll("a.classical.active"),
    ];
}