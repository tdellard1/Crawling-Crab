export default function Order(){
    return `
    <div id="order-container">
        <div id="container">
            <div id="container-wrapper">
                <h1>Pick Your Platter</h1>
                <div class="container-meal">
                    <div class="card" id="Meal-1">
                        <div class="content">
                            <h4>One Piece Platter</h4>
                            <p>Select a single piece of meat.</p>
                            <input type="radio" name="meal" value="1" hidden>
                        </div>
                    </div>
                    <div class="card" id="Meal-2">
                        <div class="content">
                            <h4>One Piece Platter</h4>
                            <p>Select from 2 pieces of meat.</p>
                            <input type="radio" name="meal" value="2" hidden>
                        </div>
                    </div>
                    <div class="card" id="Meal-3">
                        <div class="content">
                            <h4>One Piece Platter</h4>
                            <p>Select from 3 pieces of meat.</p>
                            <input type="radio" name="meal" value="3" hidden>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-meat"></div>
            <div class="container-sauces"></div>
            <button id="AddToOrder" hidden>Add To Order</button>      
        </div>
        
    </div>
   
    `;
}