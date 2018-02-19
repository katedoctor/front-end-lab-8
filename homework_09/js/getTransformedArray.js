let getTransformedArray = (arr, fn) => {
  forEach(arr, function(n,i){
    arr[i] = fn(n);
  });
  return arr;
}
let increment = (num)=>++num;

