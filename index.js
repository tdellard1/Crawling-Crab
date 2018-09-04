import Info from './components/Info';
import Navigation from './components/Navigation';
import Promo from './components/Promo';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Landing from './components/Landing';

document
    .querySelector('#root')
    .innerHTML = 
    `
    ${Landing()}
    ${Info()}
    ${Navigation()}
    ${Promo()}
    ${Menu()}
    ${Footer()}
    `;