window.onload = function(){

  var a = prompt("Enter value of first side..");
  var b = prompt("Enter value of second side..");
  var c = prompt("Enter value of third side..");
  var numA = parseInt(a);
  var numB = parseInt(b);
  var numC = parseInt(c);
  var p = ((numA + numB + numC)/2);
  var square = Math.sqrt(p * (p - numA)*(p - numB)*(p - numC));
  var side1 = Math.pow(numA, 2);
  var side2 = Math.pow(numB, 2);
  var side3 = Math.pow(numC, 2);
  var x = side1 + side2;
  var y = side1 + side3;
  var z = side2 + side3;
  var type;




      if ( side1 == z || side2 == y || side3 == x) {
        type = "right triangle ";  }
        else if (numA == numB && numB == numC && numA == numC){
        type = "equilateral";
      } else if(numA == numB && numA!=numC || numA == numC && numA!=numB || numB == numC && numB!=numA){
        type = "isosceles";
      } else  if( numA!=numB!=numC) {
        type = "scalene";
      }




  function checkNumber() {
      if (a > 0  &&  b > 0 &&  c > 0 && square!=0){
        console.log("For data " + a +"," + b + "," + c + ":" + "Type of triangle is " + type +  " triangle and square is " +   parseFloat(square.toFixed(2)));
      } else {
        console.log("Incorrect data");
      }

  }
  checkNumber();
}
