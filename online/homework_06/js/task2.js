function (){
  var a = prompt("Enter the amount of Euro..");
  var b = prompt(" Enter the amount of USD..")
  var euro = 33.2324;
  var dollar = 27.1240;
  var EuroToUSD = euro/dollar;
  var euroUa = a * euro;
  var dollarUa = b * dollar;


  if (a >= 0 && b >= 0){
    console.log ( "For data " + a + ", " + b + ":");
    console.log( + a + " euros are equal " +  parseFloat(euroUa.toFixed(2)) + " UAH, " + b + " dollars are equal " +
      parseFloat(dollarUa.toFixed(2)) + " UAH, one euro is equal " + EuroToUSD.toFixed(2) + " dollars.");
  } else {
    console.log( "Incorrect data");
  }
}
