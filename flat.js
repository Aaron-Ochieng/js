function flat(array, depth = 1) {
    let result = [];
  
    (function flatten(arr, d) {
      for (let item of arr) {
        if (Array.isArray(item) && d > 0) {
          flatten(item, d - 1);
        } else {
          result.push(item);
        }
      }
    })(array, depth);
  
    return result;
  }
// const arr2 = [0, 1, [2, [3, [4, 5]]]];
