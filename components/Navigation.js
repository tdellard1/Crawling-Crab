
function Link(link){
    var href = '';

    if(link !== 'home'){ // should be not equal to sign here !== or alt =
        href = link;
    }

    return `
    <li><a href="/${href}" data-navigo>${link}</a></li>
    `;
}

export default function Navigation(state){
    var links = state.links.map(Link).join('');
    

    return `
    <div id="navigation">
        <ul>
            ${links}
        </ul>
    </div>
        `;
}