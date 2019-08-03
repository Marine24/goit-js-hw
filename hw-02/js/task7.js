"use strict";

function sumNumbers() {
  let input;
  const numbers = [];
  let total = 0;

  while (input !== null) {
    input = prompt("Enter the number");
    if (isNaN(input)) {
      alert("This in not a number, try again");
    } else {
      numbers.push(Number(input));
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return alert(`Summa of numbers ${total}`);
}
console.log(sumNumbers());
