import promo from '../dist/2promo.591a007e.jpg';
import promo2 from '../dist/3promo.0cbbdff5.jpg';
import promo3 from '../dist/promo.ba90b7a4.jpg';

export default function Promo(){
    return `
    <div id="promo">
        <h1>PROMO</h1>
        <div id="promopic">
            <img src="${promo}" alt="promo pic 1">
            <img src="${promo2}" alt="promo pic 1">
            <img src="${promo3}" alt="promo pic 2">
        </div>
    </div>`;
}