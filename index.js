import Axios from 'axios';
import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Content from './components/Content';
import store from './store/store';
import Greeter from './js/Greeter';
import Order from './js/Order';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);
var greeter = new Greeter(store.dispatch.bind(store));


function render(){
    var state = store.getState();
    var order;
    
    root.innerHTML = `
    ${Landing()}
    ${Navigation(state[state.active])}
    ${Content(state)}
    ${Footer()}
    `;
    
    if(state.active === 'order'){
        order = new Order(root);
    }
    
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


Axios
    .get('https://api.openweathermap.org/data/2.5/weather?zip=63136&appid=aefc8d1800b244fe656e6e67b33be8e0')
    .then((response) => {
        store.dispatch((state) => {
            state.weather = response.data;

            return state;
        });
    });

/* Axios
    .get('https://radiant-plateau-57525.herokuapp.com/greeting?name=Travis')
    .then((response) => console.log(response.data)); */


store.addListener(render);