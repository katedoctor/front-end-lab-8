// const max = process.argv[2];
// let FizzBuzz = {
//   [Symbol.iterator]() {
//     let start = 1;
//     return {
//       next() {
//         if(start > max) {
//           return {done: true};
//         }
//         let value = start;
//         if(value % 3 === 0) value = "Fizz";
//         if(value % 5 === 0) value = "Buzz";
//         if(value % 3 && value % 5) value = "FizzBuzz";
//         start++;
//         return {done: false, value: value};
//       }
//     }
//   }
// }

// for (var n of FizzBuzz) {
//   console.log(n);
// }
const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let start = 1;
    return {
      next() {
        if (start > max) {
          return { done: true };
        }
        let value = start;
        if (value % 15 === 0) value = "FizzBuzz";
        if (value % 3 === 0) value = "Fizz";
        if (value % 5 === 0) value = "Buzz";
        start++;
        return { done: false, value: value };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}