let increment = (num)=>++num;
let getTransformedArray = (arr,fn)=>{
  arr.forEach(function(n,i){
    arr[i]=increment(n);
  });
  return arr;
};