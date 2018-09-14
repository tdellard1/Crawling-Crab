import Post from '../Post';

/* export default `
<div id="info">
    <div class="vert">
        <h3 class="vert">LOL</h3>
        </div>
        <div id="address">
            <p>1671 El Tigre Terrace</p>
            <p>St.Louis, MO 63138</p>
        </div>
        <div class="vert">
            <h3>Connect</h3>
        </div>
        
        <div id="hours">
            <p>Closed until Thursday</p>
            <p>Thursday - Sunday</p>
            <p>2:00PM - 8:00PM</p>
        </div>
        <div class="vert">
            <h3>Hours Of Operation</h3>
        </div>
        <div id="connect">
            <i class="fas fa-phone-square fa-5x"></i>
            <i class="fab fa-facebook fa-5x"></i>
        </div>
    </div>
        `; */

export default function Info(posts){
    return posts
        .map(Post)
        .join('');
}