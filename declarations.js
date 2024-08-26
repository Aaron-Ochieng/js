const escapeStr = "`\\/\"\`\'";
const arr = [4, '2']
const obj = {
  str: "string",
  num: 1,
  bool: true,
  undef: undefined
}
const nested = {
  arr: [4, undefined, '2'],
  obj: {
    str: "string value",
    num: 2,
    bool: false
  }
}
Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)