'use strict';

const countryChina = 'China';
const costDeliveryChina = 100;
const countryChili = 'Chili';
const costDeliveryChili = 250;
const countryAustralia = 'Australia';
const costDeliveryAustralia = 170;
const countryIndia = 'India';
const costDeliveryIndia = 80;
const countryJamaica = 'Jamaica';
const costDeliveryJamaica = 120;

const userOrder = prompt(
  `Выберете страну, в которую необходимо осуществить доставку: China, Chili, Australia, India, Jamaica`,
);
if (userOrder !== null) {
  const userChoice = userOrder.toLowerCase();
  countryChina.toLocaleLowerCase();
  countryChili.toLocaleLowerCase();
  countryAustralia.toLocaleLowerCase();
  countryIndia.toLocaleLowerCase();
  countryJamaica.toLocaleLowerCase();
  switch (userChoice) {
    case 'China':
      alert(
        `Доставка в ${countryChina} будет стоить ${costDeliveryChina} кредитов`,
      );
      break;
    case 'chili':
      alert(
        `Доставка в ${countryChili} будет стоить ${costDeliveryChili} кредитов`,
      );
      break;
    case 'australia':
      alert(
        `Доставка в ${countryAustralia} будет стоить ${costDeliveryAustralia} кредитов`,
      );
      break;
    case 'india':
      alert(
        `Доставка в ${countryIndia} будет стоить ${costDeliveryIndia} кредитов`,
      );
      break;
    case 'jamaica':
      alert(
        `Доставка в ${countryJamaica} будет стоить ${costDeliveryJamaica} кредитов`,
      );
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
} else {
  alert('Страна не выбрана');
}
