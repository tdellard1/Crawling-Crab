import Axios from 'axios';
import Navigo from 'navigo';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Content from './components/Content';
import store from './store/store';
import Order from './js/Order1';

var root = document.querySelector('#root');
var router = new Navigo(window.location.origin);

function render(){
    var state = store.getState();
    var order;
    
    
    root.innerHTML = `
    ${Navigation(state[state.active])}
    ${Landing(state)}
    ${Content(state)}
    ${Footer()}
    `;
    
    document.querySelector('#landing').style.height = (window.innerWidth - 152) + 'px';
    
    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
            var scrolled = window.pageYOffset / 100;

            if(window.innerWidth > 768){
                const background = document.querySelector('#landing');
                const promo = document.querySelector('#promo');

                promo.style.backgroundPosition = '50% ' + (scrolled * 4)  + '%';
                background.style.backgroundPosition = '50% ' + (scrolled * 8) + '%';
            }

            /* if((scrolled * 4) > 23.5){
                document.querySelector('#landing > a').style.visibility = 'hidden';
            }
            else if((scrolled * 4) < 23.5){
                document.querySelector('#landing > a').style.visibility = 'visible';
            } */
        });
    });

    window.addEventListener('resize', () => {
        window.requestAnimationFrame(() => {
            var landing = document.querySelector('#landing');

            if(window.innerWidth < 768){
                landing.style.height = (window.innerWidth - 152) + 'px';
            }
            else{
                landing.style.height = '1000px';
            }
        });
    });

    if(state.active === 'order'){
        order = new Order(root);
    }
    
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

store.addListener(render);