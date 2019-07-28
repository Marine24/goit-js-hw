'use strict';

let input;
let total = 0;
let message;

while (input !== null) {
  input = prompt('Enter your number please');
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз.');
  } else {
    total += Number(input);
  }
}
alert(`Общая сумма чисел равна ${total}`);
