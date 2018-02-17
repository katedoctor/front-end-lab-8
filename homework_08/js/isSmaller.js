let isBigger = (a,b) => (a>b);
let isSmaller = function (a,b){
  return !isBigger(a,b) && (a!==b);
}
