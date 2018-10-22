export default function Info(state){
    var now = new Date();
    var days = [ 'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday' ];
    var day = days[ now.getDay() ];
    var hour = now.getTime();
    var currentHours = '';


    function hoursofOperation(){
        switch(day){
            case 'Monday':
            case 'Thursday':
            case 'Friday':
            case 'Saturday':
            case 'Sunday':
                if(hour >= 14 && hour < 22){
                    currentHours = 'Currently Open';
                }
                else{
                    currentHours = 'Currently Closed';
                }
                break;
            default:
                currentHours = 'Currently Closed';
                break;
        }
    }

    hoursofOperation();

    return `
    <div id="info">
        <div id="hours">
            <div id='hor'>
                <h1>Hours Of Operation</h1>
                <p>${currentHours}</p>
            </div>
            <div id='hours-list'>
                <div class="hours-detail">
                    <h3>Monday</h3>
                    <h6>2pm-8pm</h6>
                </div>
                <div class="hours-detail">
                    <h3>EO Tuesday</h3>
                    <h6>2pm-8pm</h6>
                </div>
                <div class="hours-detail">
                    <h3>Thurs-Sun</h3>
                    <h6>2pm-9pm</h5>
                </div>
            </div>
        </div>
        <div id="maps"></div>

        <div id="promo">
            <div id="promotion">
                <p>-Signature-</p>
                <h1>Seafood Plat<span>ter</span></h1>
                <h4><i>Topped with Magic Dust & Garlic Butter</i></h4>
            </div>
        </div>
            `;
}