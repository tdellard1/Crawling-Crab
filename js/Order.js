import Meal from '../js/Meal';
import Axios from 'axios';

/**
 * TODO: allow user to change meat selection options, currently that have to click the meal in order to reset options
 */

class Order{
    constructor(root){
        this.meal;
        this.root = root;
        this.totalMeatPrice = 0;
        this.totalSaucePrice = 0;
        this.totalCost = root.querySelector('#current-order > h1');
        this.meatOptionsArray = [ root.querySelector('#meat-selection-1'), root.querySelector('#meat-selection-2'), root.querySelector('#meat-selection-3'), root.querySelector('#meat-selection-4') ];
        this.meatVolumeArray = [ root.querySelector('#meat-volume-1'), root.querySelector('#meat-volume-2'), root.querySelector('#meat-volume-3') ];
        this.meatPrices = [ 25,40,55 ];
        this.sauceElementArray = [ root.querySelector('#sauce-1'), root.querySelector('#sauce-2'), root.querySelector('#sauce-3') ];
        this.sauceCost = [ 5, 0, 1 ];
        this.limit = 0;
        this.mealType;
        this.meatType = [];
        this.sauceType;

        this.attachListeners();
    }
    attachListeners(){
        this.meatVolumeArray.forEach((meatElement) =>  {
            meatElement.addEventListener('click', (event) => this.selectMealSize(event));
        });
        this.meatOptionsArray.forEach((meatOption) =>  {
            meatOption.addEventListener('click', (event) => this.selectMeats(event));
        });
        this.sauceElementArray.forEach((sauceElement) => {
            sauceElement.addEventListener('click', (event) => this.selectSauce(event));
        });
        this.root.querySelector('input#submit-button').addEventListener('click', (event) => {
            event.preventDefault();

            this.root.querySelectorAll('.meat-selection-divs').forEach((element) => {
                if(element.querySelector('input').checked){
                    this.meatType.push(element.querySelector('p').textContent);
                }
            });
            
            this.meal = new Meal(this.mealType, this.meatType, this.sauceType);
            this.meal.render(this.root.querySelector('#meal-list'));
        });
        this.root.querySelector('#current-order button').addEventListener('click', (event) => {
            alert(event.target);
            Axios
                .get(`https://radiant-plateau-57525.herokuapp.com/order?meal=${this.mealType}&meat=${this.meatType}&sauce=${this.sauceType}`)
                .then((response) => console.log(response.data));
        });
    }
    testfunction(event){
        var test = Array.from(this.root.querySelectorAll('.meat-selections-checkbox'));
        var test2 = test.filter((meatSel) => meatSel.checked);

        if(test2.length > this.limit){
            event.target.checked = false;
        }
    }
    selectMealSize(event){
        var meatVolume = event.target.id.substr(event.target.id.length - 1);

        this.meatVolumeArray.forEach((meat) => {
            if(meat.id === event.target.id){
                meat.style.backgroundColor = 'green';
                this.root.querySelector(`input#meatnum-${meatVolume}`).checked = true;
                
                this.totalMeatPrice = this.meatPrices[meatVolume - 1];
                this.updatePriceDisplay();
                this.limit = meatVolume;

                Array.from(this.root.querySelectorAll('input.meat-selections-checkbox')).forEach((meatCheckbox) => {
                    meatCheckbox.checked = false;
                });

                this.mealType = meat.querySelector('p').textContent;
            }
            else{
                meat.style.backgroundColor = '#ddd';
                this.meatOptionsArray.forEach((singleMeat) => {
                    singleMeat.style.backgroundColor = '#ddd';
                });
            }
        });
    }
    selectMeats(event){
        var limitIsMet = this.isLimitMet();
        var meatSelect = event.target.id.substr(event.target.id.length - 1);

        if(limitIsMet){
            console.log('limitIsMet');
        }
        else{
            this.meatOptionsArray.forEach((meat) => {
                if(meat.id === event.target.id){
                    meat.style.backgroundColor = 'green';
                    this.root.querySelector(`input#meat-sel-${meatSelect}`).checked = true;
                }
            });
        }
    }
    isLimitMet(){
        var test = Array.from(this.root.querySelectorAll('.meat-selections-checkbox'));
        var test2 = test.filter((meatSel) => meatSel.checked);

        if(test2.length >= this.limit){
            return true;
        }
        
        return false;
    }
    selectSauce(event){
        var sauceIdentifier = event.target.id.substr(event.target.id.length - 1);

        this.sauceElementArray.forEach((sauce) => {
            if(sauce.id === event.target.id){
                sauce.style.backgroundColor =  'green';
                this.root.querySelector(`#sauce-selection-${sauceIdentifier}`).checked = true;
                this.totalSaucePrice = this.sauceCost[sauceIdentifier - 1];
                this.updatePriceDisplay();
                this.sauceType = sauce.querySelector('p').textContent;
            }
            else{
                sauce.style.backgroundColor = '#ddd';
            }
        });
    }
    updatePriceDisplay(){
        var totalPrice = this.totalMeatPrice + this.totalSaucePrice;

        this.totalCost.innerHTML = totalPrice;
    }
}

export default Order;


/* var meal = {};

$(document).ready(function(){
    var form = $('#form');
    form.submit(function (event){
        event.preventDefault();
        $("h3").html("Hello");
        var Array = $(event.target).children();
        var Array2 = $("#form").serialize().split("&").map((element) => element.split("="));        var tempArray = [];

        for(let i = 0; i < Array2.length; i++) {

            if (Array2[i][0] === "meat"){
                console.log(true);
                tempArray.push(Array2[i][1]);
            } else {
                meal[Array2[i][0]] = Array2[i][1];
            }
        }
        meal['meat'] = tempArray;
        $.post('order/ajax', meal, function() {
            addToCart(meal);
        })

    });

    var cart = $('#header > i');

    cart.click(function() {
        $('#current-order').toggle();
    });

    function addToCart(meal){
        var template = `
        <h2>Meat Size = ${meal.meatnum}</h2>
            <h2>Meat Selected = ${meal.meat}</h2>
            <h2>Sauces = ${meal.sauce}</h2>
        `
        $('#current-order').append(template);
    }
});

*/