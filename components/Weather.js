import { defaultsDeep } from 'lodash';

var defaultWeather = {
    'main': {
        'temp': 0
    },
    'weather': []
};

export default function Weather(state){
    var weather = defaultsDeep(state, defaultWeather);
    
    return  `
    <div>
        <p>This is the weather in St.Louis</p>
        <strong>Teamerature</strong>
        <p>${weather.main.temp}</p>

        <p>${weather.weather[0].description}</p>
        </div>
    `;
}