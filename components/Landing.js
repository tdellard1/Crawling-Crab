export default function Landing(state){
    /* var Up = setInterval(moveUp, 1000);

    function moveDown(){
        document.querySelector('#landing > a').style.bottom = '0%';
        Up = setInterval(moveUp, 1000);
    }

    function moveUp(){
        document.querySelector('#landing > a').style.bottom = '5%';
        setTimeout(moveDown, 2000);
    } */

    if(state.active == 'info'){
        return `
            <div id="landing">
                <a href="#hours"><i class='fas fa-arrow-down fa-2x'></i></a> 
            </div>`;
    }
}