import Axios from 'axios';

class Order1{
    constructor(root){
        this.root = root;
        this.containerMealDom = this.root.querySelector('div.container-meal');
        this.containerMeatDom = this.root.querySelector('div.container-meat');
        this.Meals = Array.from(this.root.querySelectorAll('div.container-meal > .card'));
        this.meatLimit = 0;
        this.lastMeatSelected;

        this.attachListener();
    }
    attachListener(){
        this.attachMealListeners();
        this.attachOrderButtonListener();
    }
    attachMealListeners(){
        this.attachMeatSection();
    }
    attachOrderButtonListener(){
        this.root.querySelector('#AddToOrder').addEventListener('click', () => {
            var inputs = Array.from(this.root.querySelectorAll('input'));
            var meal;
            var meat;
            var sauce;

            /* Axios
                .get('http://radiant-plateau-57525.herokuapp.com/greeting?name=Travis')
                .then((response) => console.log(response.data[0].content)); */

            inputs.forEach((input) => {
                switch(input.name){
                    case 'meal':
                        meal = input.value;
                        break;
                    case 'meat':
                        meat = input.value;
                        break;
                    case 'sauce':
                        sauce = input.value;
                        break;
                }
            });

            Axios
                .get(`https://radiant-plateau-57525.herokuapp.com/order?meal=${meal}&meat=${meat}&sauce=${sauce}`)
                .then((response) => {
                    response.data.forEach((order) => {
                        /* console.log(order.meal);
                        console.log(order.meat);
                        console.log(order.meal); */
                        this.order = document.createElement('div');
                        this.order.setAttribute('id', 'border');

                        this.mealHeader = document.createElement('h4');
                        this.mealHeaderText = document.createTextNode(`${order.meal} Meat Order`);
                        this.mealHeader.appendChild(this.mealHeaderText);
                        
                        this.meatHeader = document.createElement('h5');
                        this.meatHeaderText = document.createTextNode(order.meat);
                        this.meatHeader.appendChild(this.meatHeaderText);

                        this.sauceHeader = document.createElement('h5');
                        this.sauceHeaderText = document.createTextNode(order.sauce);
                        this.sauceHeader.appendChild(this.sauceHeaderText);

                        this.order.appendChild(this.mealHeader);
                        this.order.appendChild(this.meatHeader);
                        this.order.appendChild(this.sauceHeader);

                        this.root.querySelector('#container').appendChild(this.order);
                    });
                });
        });
    }
    attachMeatSection(){
        this.Meals.forEach((meal) => meal.addEventListener('click', (event) => {
            var container = this.root.querySelector('#container');

            this.highlightMeal(event);

            
            container.replaceChild(this.renderMeatSelection(event), container.childNodes[3]);
        }), true);
    }
    highlightMeal(event){
        this.Meals.forEach((meal) => {
            if(event.currentTarget === meal){
                meal.style.backgroundColor = '#ccc';
                meal.querySelector('input').checked = true;
            }
            else{
                meal.style.backgroundColor = '#fff';
            }
        });
    }
    highlightMeat(limit, event){
        Array.from(this.root.querySelectorAll('#container-meat > div.card')).forEach((meat) => {
            if(meat == event.currentTarget){
                if(meat.querySelector('input').checked){
                    meat.querySelector('input').checked = false;
                    meat.style.backgroundColor = '#fff';
                }
                else{
                    meat.querySelector('input').checked = true;
                    meat.style.backgroundColor = '#ccc';
                }
                if(Array.from(this.root.querySelectorAll('#container-meat > div.card > input')).filter((input) => input.checked).length > limit){
                    meat.querySelector('input').checked = false;
                    meat.style.backgroundColor = '#fff';
                }
            }
        });
    }
    renderMeatSelection(event){
        var mealNumber = event.currentTarget.id.substr(event.currentTarget.id.length - 1);

        this.meats = [ 'Garlic Crab Cluster', 'Lobster Tail', '1lb Shrimp', '1lb CrawFish' ];

        this.containerWrapper = document.createElement('div');
        this.containerWrapper.setAttribute('id', 'container-wrapper');

        this.largeHeader = document.createElement('h1');
        
        if(mealNumber > 1){
            this.largeHeaderText = document.createTextNode(`Select from ${mealNumber} pieces of Seafood`);
        }
        else{
            this.largeHeaderText = document.createTextNode(`Select ${mealNumber} piece of Seafood`);
        }
        
        
        this.largeHeader.appendChild(this.largeHeaderText);

        this.containerMeat = document.createElement('div');
        this.containerMeat.setAttribute('id', 'container-meat');

        this.containerWrapper.appendChild(this.largeHeader);
        
        this.meats.forEach((meat) => {
            this.header = document.createElement('h4');
            this.meat = document.createTextNode(meat);
            this.header.appendChild(this.meat);

            this.checkbox = document.createElement('input');
            this.checkbox.type = 'checkbox';
            this.checkbox.name = 'meat';
            this.checkbox.hidden = true;
            this.checkbox.value = meat;

            
            this.card = document.createElement('div');
            this.card.setAttribute('class', 'card');
            this.card.appendChild(this.header);
            this.card.appendChild(this.checkbox);


            this.containerMeat.appendChild(this.attachSauceSection(this.card, mealNumber));
        });
        

        this.containerWrapper.appendChild(this.containerMeat);

        return this.containerWrapper;
    }
    attachSauceSection(card, limit){
        card.addEventListener('click', (event) => {
            var container = this.root.querySelector('#container');

            this.highlightMeat(limit, event);

            if(!this.root.querySelector('#container-sauce')){
                container.replaceChild(this.renderSauceSelection(), container.childNodes[5]);
            }
        });

        return card;
    }
    renderSauceSelection(){
        this.sauces = [ 'Lemon Garlic', 'Garlic Butter', 'Hot&Spicy' ];

        this.containerWrapper = document.createElement('div');
        this.containerWrapper.setAttribute('id', 'container-wrapper');

        this.largeHeader = document.createElement('h1');
        this.largeHeaderText = document.createTextNode('Select your Sauce');
        this.largeHeader.appendChild(this.largeHeaderText);

        this.containerSauce = document.createElement('div');
        this.containerSauce.setAttribute('id', 'container-sauce');

        this.containerWrapper.appendChild(this.largeHeader);

        this.sauces.forEach((sauce) => {
            this.header = document.createElement('h4');
            this.sauce = document.createTextNode(sauce);
            this.header.appendChild(this.sauce);

            this.card = document.createElement('div');
            this.card.setAttribute('class', 'card');
            this.card.appendChild(this.header);
            this.containerSauce.appendChild(this.card);

            this.input = document.createElement('input');
            this.input.type = 'radio';
            this.input.name = 'sauce';
            this.input.hidden = true;
            this.input.value = sauce;

            this.card.appendChild(this.input);

            this.card.addEventListener('click', (event) => {
                this.highlightSauce(event);
                this.showAddButton();
            });
        });

        this.containerWrapper.appendChild(this.containerSauce);

        return this.containerWrapper;
    }
    highlightSauce(event){
        Array.from(this.root.querySelectorAll('#container-sauce > div.card')).forEach((sauce) => {
            if(event.currentTarget === sauce){
                sauce.style.backgroundColor = '#ccc';
                sauce.querySelector('input').checked = true;
            }
            else{
                sauce.style.backgroundColor = '#fff';
            }
        });
    }
    showAddButton(){
        this.root.querySelector('button#AddToOrder').style.display = 'block';
    }
}

export default Order1;