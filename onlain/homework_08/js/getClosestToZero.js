function getClosestToZero(...arr) {
  let closest = Math.abs(arr[0]);
  for (let i of arr) {
    if (Math.abs(i) < closest)
    closest = i;
  } return closest;
}