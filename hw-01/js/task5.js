'use strict';

const countryChina = 'china';
const costDeliveryChina = 100;
const countryChili = 'chili';
const costDeliveryChili = 250;
const countryAustralia = 'australia';
const costDeliveryAustralia = 170;
const countryIndia = 'india';
const costDeliveryIndia = 80;
const countryJamaica = 'jamaica';
const costDeliveryJamaica = 120;

const userOrder = prompt(
  `Выберете страну, в которую необходимо осуществить доставку: China, Chili, Australia, India, Jamaica`,
);
if (userOrder !== null) {
  switch (userOrder.toLowerCase()) {
    case 'china':
      alert(`Доставка в China будет стоить ${costDeliveryChina} кредитов`);
      break;
    case 'chili':
      alert(`Доставка в Chili будет стоить ${costDeliveryChili} кредитов`);
      break;
    case 'australia':
      alert(
        `Доставка в Australia будет стоить ${costDeliveryAustralia} кредитов`,
      );
      break;
    case 'india':
      alert(`Доставка в India будет стоить ${costDeliveryIndia} кредитов`);
      break;
    case 'jamaica':
      alert(`Доставка в Jamaika будет стоить ${costDeliveryJamaica} кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
} else {
  alert('Страна не выбрана');
}
