import Info from './components/Info';
import Navigation from './components/Navigation';
import Promo from './components/Promo';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Landing from './components/Landing';

var State = {
    'active': 'Home',
    'Home': {
        'title': 'Welcome To The Home Page'
    },
    'Promo': {
        'title': 'Welcome To The Promo Page'
    },
    'Menu': {
        'title': 'Welcome To The Menu Page'
    },
    'contact': {
        'title': 'Welcome To The Contact Page'
    }
};

var root = document
    .querySelector('#root');

function handleNavigation(event){
    var newState = State;

    newState.active = event.target.textContent;
    event.preventDefault();
    render(newState);
}

function render(state){
    var links;

    root
        .innerHTML =     `
    ${Landing()}
    ${Info(state[state.active])}
    ${Navigation()}
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


