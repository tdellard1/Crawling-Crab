import promo from '../../res/2promo.jpg';
import promo2 from '../../res/3promo.jpg';
import promo3 from '../../res/4promo.jpg';

import {
    capitalize,
    kebabCase
} from 'lodash';

function Repo(repo){
    var name = kebabCase(repo.name).split('-').map(capitalize).join(' ');

    return `
    <li>
        <a href="${repo.html_url}">${name}</a> 
    </li>
    `;
}

export default function Promo(state){
    var repos = state.repos.map(Repo).join('');


    return `
    <ol>
        ${repos}
    </ol>
    <div id="promo">
        <h1>PROMO</h1>
        <div id="promopic">
            <img src="${promo}" alt="promo pic 1">
            <img src="${promo2}" alt="promo pic 1">
            <img src="${promo3}" alt="promo pic 2">
        </div>
    </div>`;
}