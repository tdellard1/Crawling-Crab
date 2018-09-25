import Axios from 'axios';
import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Content from './components/Content';
import store from './store/store';
import Greeter from './js/Greeter';

var apikey = '93467ea10e1eca651b5d5a68b5749422f4ab22f0';
var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var greeter = new Greeter(store.dispatch.bind(store));


function render(){
    var state = store.getState();
    
    root.innerHTML = `
    ${Landing()}
    ${Navigation(state[state.active])}
    ${Content(state)}
    ${Footer(state)}
    `;
    
    greeter.render(root);
    
    router.updatePageLinks();
}

function handleNavigation(activePage){
    store.dispatch((state) => Object.assign(state, { 'active': activePage }));
}

router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('info'))
    .resolve();

/* Axios
    .get('https://api.savvycoders.com/books')
    .then((response) => {
        store.dispatch((state) => Object.assign(state, { 'posts': response.data }));
    }); */

Axios
    .get('https://api.github.com/users/tdellard1/repos', {
        'headers': {
            'Authorization': `token ${process.env.GITHUB_API_KEY}` // eslint-disable-line
        }
    })
    .then((response) => {
        store.dispatch((state) => {
            state.repos = response.data;

            return state;
        });
    });

store.addListener(render);