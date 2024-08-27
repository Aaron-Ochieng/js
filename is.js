// const is = {};


is.num = function (value) { return typeof (value) === "number" }
is.nan = function (value) { return typeof (value) != "number" }
is.str = function (value) { return typeof (value) === "string" }
is.bool = function (value) { return typeof (value) === "boolean" }
is.undef = function (value) { return typeof (value) === "undefined" }
is.def = function (value) { return typeof (value) != "undefined" }
is.obj = function (value) { return typeof (value) === "object" || value === null }
is.fun = function (value) { return typeof (value) === "function" }
is.truthy = function (value) { return !!value }
is.falsy = function (value) { return !value }
// console.log(is.undef(is)) 