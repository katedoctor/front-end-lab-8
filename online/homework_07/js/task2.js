let play = confirm(`Do you want to play a game?`);
let maxPrize = 10;
let prize = 10;
let totalPrize = 0;
let min = 0;
let max = 5;

if (play) {
  let luckyNum =
    Math.floor(Math.random() * (max - min + 1)) + min;
  for (let i = 0; i < 3; i++) {
    let userNum = Number(prompt(
      `Enter a number from ${min} to ${max}\n` + `Attempts left: ${3 - i}\n` + `Total prize: ${totalPrize}$\n` + `Possible prize on current attempt: ${prize}$`
    )
    );
    if (userNum === luckyNum) {
      totalPrize += prize;
      alert(`Thank you for a game. Your prize is: ${prize}$\n` + `Total prize: ${totalPrize}$`);
      play = confirm(`Do you want to continue a game?`);
      if (play) {
        min *= 2;
        max *= 2;
        maxPrize *= 3;
        prize = maxPrize;
        i = -1;
        numRandom =
          Math.floor(Math.random() * (max - min + 1)) + min;
      } else {
        break;
      }
    } else if (i == 2) {
      play = confirm(`Thank you for a game. Your prize is: ${totalPrize}$\n` + `Do you want to play again?`);
      if (play) {
        totalPrize = 0;
        maxPrize = 10;
        prize = 10;
        min = 0;
        max = 5;
        i = -1;
        luckyNum =
          Math.floor(Math.random() * (max - min + 1)) + min;
      } else {
        break;
      }
    } else if (i == 1) {
      prize = Math.floor(prize / 2);
    } else {
      prize = Math.floor(maxPrize / 2);
    }
  }
} else {
  alert(`You did not became a millionaire`);
}