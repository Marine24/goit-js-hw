'use strict';

const China = 'china';
const costDeliveryChina = 100;
const Chili = 'chili';
const costDeliveryChili = 250;
const Australia = 'australia';
const costDeliveryAustralia = 170;
const India = 'india';
const costDeliveryIndia = 80;
const Jamaica = 'jamaica';
const costDeliveryJamaica = 120;
let message;

const userOrder = prompt(
  `Choose the country in which you want to make delivery: China, Chili, Australia, India, Jamaica`,
);
if (userOrder !== null) {
  const userChoice = userOrder.toLowerCase();

  switch (userChoice) {
    case 'china':
      message = `Доставка в ${China} будет стоить ${costDeliveryChina} кредитов`;
      break;
    case 'chili':
      message = `Доставка в ${Chili} будет стоить ${costDeliveryChili} кредитов`;
      break;
    case 'australia':
      message = `Доставка в ${Australia} будет стоить ${costDeliveryAustralia} кредитов`;
      break;
    case 'india':
      message = `Доставка в ${India} будет стоить ${costDeliveryIndia} кредитов`;
      break;
    case 'jamaica':
      message = `Доставка в ${Jamaica} будет стоить ${costDeliveryJamaica} кредитов`;
      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
} else {
  message = 'Страна не выбрана';
}
alert(message);
