function () {
  var a = prompt("Please, enter number from 1 to 20", 1);
  var count = parseInt(a);
  var brackets = ' ';

  if (count >= 1 && count < 21) {
    for (var i = 1; i <= count; i++) {
      for (var j = 1; j <= (count - i); j++) {
        brackets = brackets.concat('   ');
      }
      for (var q = 2; q <= i; q++) {
        brackets = brackets.concat('[~][~]');
      }
      brackets = brackets.concat('[~]\n ');
    }
    console.log(brackets);
  } else {
    console.error(" Incorrect data");
  }
}
