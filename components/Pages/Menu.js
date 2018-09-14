import mac from '../../dist/seafood-mac.d8913992.jpg';
import menu from '../../dist/menu.812f13a2.jpg';

export default function Menu(){
    return `
    <div id="menu">
    <h1>MENU</h1>
    <div id="menuitems">
        <div id="stepone" class="steps">
            <h2>Step One - Select Your Side</h2>
            <div id="steponegrid">
                <h4>Sides:</h4>
                <ul>
                    <li>Sweet Corn</li>
                    <li>Sausage Chunks</li>
                    <li>Hand Cut Potatoes</li>
                    <li>Cajin Boiled Eggs</li>
                    <img src="${mac}" alt="Mac">
                    <img src="${mac}" alt="Mac">
                    <img src="${mac}" alt="Mac">
                    <img src="${mac}" alt="Mac">
                </ul>
            </div>
        </div>
        <div id="steptwo" class="steps">
            <h2>Step Two - Select Your Meat</h2>
            <ul>
                <li>Jumbo Shrimp</li>
                <li>Crab Leg Cluster</li>
            </ul>
            <div id="steptwogrid">
                <img src="${mac}" alt="Mac">
                <img src="${mac}" alt="Mac">
            </div>        
        </div>
        <div id="appetizers" class="steps">
            <h2>Add An Appetizer</h2>
        </div>
    </div>
    <div id="menupic">
        <img src="${menu}" alt="menu">
    </div>
</div>`;
}