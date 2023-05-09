function countTrue(arr) {
  console.log(arr.filter((value) => value !== false).length);
}
//countTrue([true, false, true, true, false, true, true]);

function possibleBonus(a, b) {
  return a + b == 10;
}
const numberOne = Math.floor(Math.random() * 11);
const numberTue = Math.floor(Math.random() * 11);

console.log(possibleBonus(numberOne, numberTue));
console.log(`${numberOne}+${numberTue}`);
console.log(numberOne + numberTue);
