'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let creditsRemainder;
let totalPrice;
let message;

const userOrder = prompt('How many droids do you want?');
if (userOrder === null) {
  message = 'Отменено пользователем!';
} else if ((totalPrice = Number(userOrder) * pricePerDroid)) {
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
  } else if (totalPrice < credits) {
    creditsRemainder = credits - userOrder * pricePerDroid;
    message = `Вы купили ${userOrder} дроидов, на счету осталось ${creditsRemainder} кредитов.`;
  }
}
alert(message);
