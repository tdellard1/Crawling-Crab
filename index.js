import Axios from 'axios';
import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Content from './components/Content';
import * as State from './store';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var newState = Object.assign({}, State);

function handleNavigation(activePage){
    newState.active = activePage;
    render(newState); // eslint-disable-line
}

function render(state){
    root
        .innerHTML =     `
    ${Landing()}
    ${Navigation(state[state.active])}
    ${Content(state)}
    ${Footer()}
    `;

    router.updatePageLinks();
}

router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('info'))
    .resolve();

Axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        newState.posts = response.data;

        render(newState);
    });
