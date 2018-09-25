import Weather from './Weather';

export default function Footer(state){
    return `
    <div id="footer">
        <h1>${Weather(state.weather)}</h1>
    </div>`;
}