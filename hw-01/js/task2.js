'use strict';

const total = 100;
const ordered = 50;
let message;

if (total < ordered) {
  message = 'На складе недостаточно товаров!';
} else {
  message = 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(message);
