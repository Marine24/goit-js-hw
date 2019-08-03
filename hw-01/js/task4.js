'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

const userOrder = prompt('Сколько дронов Вы желаете приобрести?');
if (userOrder === null) {
  alert('Отменено пользователем!');
} else {
  totalPrice = userOrde * pricePerDroid;
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    alert(
      `Вы купили ${userOrder} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  }
}
