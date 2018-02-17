function forEach (arr, fn){
  for(let i = 0; i<arr.length; i++){
    fn(arr[i],i,arr);
  }
}
// forEach([3, 5, 2], function (el) {
//   console.log(el);
// })