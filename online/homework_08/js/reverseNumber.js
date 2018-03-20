function reverseNumber (n){
  return Math.abs(n).toString().split("").reverse().join("")*Math.sign(n);
}