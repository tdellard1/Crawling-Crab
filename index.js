import Info from './components/Info';
import Navigation from './components/Navigation';
import Promo from './components/Promo';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Landing from './components/Landing';

var State = {
    'active': 'Home',
    'Home': {
        'links': [ 'Promo', 'Menu', 'Contacts' ],
        'title': 'Welcome To The Home Page'
    },
    'Promo': {
        'links': [ 'Home', 'Menu', 'Contacts' ],
        'title': 'Welcome To The Promo Page'
    },
    'Menu': {
        'links': [ 'Home', 'Promo', 'Contacts' ],
        'title': 'Welcome To The Menu Page'
    },
    'contact': {
        'links': [ 'Home', 'Promo', 'Menu', 'Contacts' ],
        'title': 'Welcome To The Contact Page'
    }
};

var root = document
    .querySelector('#root');

function handleNavigation(event){
    var newState = State;

    newState.active = event.target.textContent;
    event.preventDefault();
    render(newState); // eslint-disable-line
}

function render(state){
    var links;

    root
        .innerHTML =     `
    ${Landing()}
    ${Info(state[state.active])}
    ${Navigation(state[state.active])}
    ${Promo()}
    ${Menu()}
    ${Footer()}
    `;

    links = document.querySelectorAll('#navigation a');

    for(let i = 0;i < links.length; i++){
        links[i]
            .addEventListener(
                'click',
                handleNavigation
            );
    }
}

render(State);


