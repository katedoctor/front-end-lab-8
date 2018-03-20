function getFilteredArray(arr, func) {
  var newArr = [];
  forEach(arr, function (el) {
    if (func(el)) {
      newArr.push(el);
    }
  })
  return newArr;
}
//let predicateFunction = (num) => num > 3;