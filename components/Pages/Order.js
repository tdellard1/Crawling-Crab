export default function Order(state){
    return ` 
    <div id='order-component'>
        <div id="current-order">
            <h1></h1>
            <div id="meal-list">
                <div class="meal-order">
                    <p>Meal Type:</p><h4>1 Meat $25</h4><br>
                    <p>Meat Selections:</p><h4>Lobster Tail</h4><br>
                    <p>Sauce Selections:</p><h4>Garlic Butter</h4>
                </div>
            </div>
            <button>Order</button>
        </div>
        <div id="order">
            <form action="/order/ajax" method="post" id="form">
                <div id="header">
                    <h1>Order:</h1>
                    <i class="fas fa-cart-plus fa-2x"></i>
                </div>
                <h4>Select Order Size: </h4>
                <div id="meat-volume">
                    <div id="meat-volume-1" class="meat-volume-divs">
                        
                        <p>1 Meat $25</p>
                        <input type="radio" id="meatnum-1" name="meatnum" value="1" hidden>
                    </div>
                    <div id="meat-volume-2" class="meat-volume-divs">
                        
                        <p>2 Meats $40</p>
                        <input type="radio" id="meatnum-2" name="meatnum" value="2" hidden>
                    </div>
                    <div id="meat-volume-3" class="meat-volume-divs">
                        
                        <p>3 Meats $55</p>
                        <input type="radio" id="meatnum-3" name="meatnum" value="3" hidden>
                    </div>
                </div>
                <h4>Select Your Meat:</h4>



                <div id="meat-selections">
                    <div id="meat-selection-1" class="meat-selection-divs">
                        <P>Garlic Crab Cluster</P>
                        <input id="meat-sel-1" class="meat-selections-checkbox" type="checkbox" name="meat" value="Crab" hidden>
                    </div>
                    <div id="meat-selection-2" class="meat-selection-divs">
                        <P>Lobster Tail</P>
                        <input id="meat-sel-2" class="meat-selections-checkbox" type="checkbox" name="meat" value="Lobster" hidden>
                    </div>
                    <div id="meat-selection-3" class="meat-selection-divs">
                        <p>1lb Shrimp</p>
                        <input id="meat-sel-3" class="meat-selections-checkbox" type="checkbox" name="meat" value="Shrimp" hidden>
                    </div>
                    <div id="meat-selection-4" class="meat-selection-divs">
                        <P>1lb CrawFish</P>
                        <input id="meat-sel-4" class="meat-selections-checkbox" type="checkbox" name="meat" value="CrawFish" hidden>
                    </div>
                </div>




                <h4>Select Your Sauce:</h4>
                <div id="sauce-selections">
                    <div id="sauce-1" class="sauce-divs">
                        <p>Lemon Garlic $5</p>
                        <input type="radio" id="sauce-selection-1" name="sauce" value="lemongarlic" hidden>
                    </div>
                    <div id="sauce-2" class="sauce-divs">
                        <p>Garlic Butter</p>
                        <input type="radio" id="sauce-selection-2" name="sauce" value="garlicbutter" hidden>
                    </div>
                    <div id="sauce-3" class="sauce-divs">
                        <p>Hot n Spicy $1</p>
                        <input type="radio" id="sauce-selection-3" name="sauce" value="hotspicy" hidden>
                    </div>
                </div>



                <!--<h4>Pick Your Sides:</h4>
                <div id="sides">
                    <input type="radio" name="sides" value="egg">Cajun Boiled Eggs <br>
                    <input type="radio" name="sides" value="corn">Sweet Corn <br>
                    <input type="radio" name="sides" value="sausage">2 Sausage Chunks <br>
                    <input type="radio" name="sides" value="potato">Hand Cut Potatoes <br>
                </div>




                <h4>Select Addons:</h4>
                <div id="addons">
                    <input type="checkbox" id="addons-1" name="addons" value="shrimp">6 Jumbo Shrimp - $5 <br>
                    <input type="checkbox" id="addons-2" name="addons" value="corn">Corn - $1 <br>
                    <input type="checkbox" id="addons-3" name="addons" value="cheese">Cheese - $1.50 <br>
                    <input type="checkbox" id="addons-4" name="addons" value="crab">Blue Garlic Crab - $5 Each <br>
                    <input type="checkbox" id="addons-5" name="addons" value="sas">SAS - $1 <br>
                    <input type="checkbox" id="addons-6" name="addons" value="egg">Eggs - $1 <br>
                    <input type="checkbox" id="addons-7" name="addons" value="bread">BreadStick - $1 <br>
                    <input type="checkbox" id="addons-8" name="addons" value="crawfish">6 Crawfish - $5 <br>
                    <input type="checkbox" id="addons-9" name="addons" value="potato">Potatoes - $2 <br>
                    <input type="checkbox" id="addons-10" name="addons" value="sour">Sour Cream - $1 <br>
                </div>-->
                <br>
                <input id="submit-button" type="submit" value="Add To Cart">
            </form>
        </div>
    </div>
    `;
}