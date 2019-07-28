'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const userPassword = prompt('Enter your password:');

if (userPassword === null) {
  message = 'Отменено пользователем!';
} else if (ADMIN_PASSWORD === userPassword) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
