const escapeStr = "`\\/\"\`\'";
const arr = Object.freeze([4, '2'])
const obj = Object.freeze({
  str: "string",
  num: 1,
  bool: true,
  undef: undefined
})

const nested = {
  arr: Object.freeze([4, undefined, '2']),
  obx: Object.freeze({
    str: "string value",
    num: 2,
    bool: false
  })
}


// console.log(escapeStr)
