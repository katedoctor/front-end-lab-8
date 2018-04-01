const max = process.argv[2];
let FizzBuzz = function*() {
    let start = 1;
    while (start <= max) {
      let value = start;
      start++;
      if (value % 15 === 0) value = "FizzBuzz";
      if (value % 3 === 0) value = "Fizz";
      if (value % 5 === 0) value = "Buzz";

      yield value;
    }
  }();
for (var n of FizzBuzz) {
  console.log(n);
}