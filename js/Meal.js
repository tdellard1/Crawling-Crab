class Meal{
    constructor(mealType, meatTypes, sauceTypes){
        this.mealType = document.createElement('h4');
        this.meatType = document.createElement('h4');
        this.sauceType = document.createElement('h4');
        this.element = document.createElement('div');
        this.element.className = 'meal-order';

        this.mealType.innerHTML = mealType;
        this.meatType.innerHTML = meatTypes.join(', ');
        this.sauceType.innerHTML = sauceTypes;

        this.element.appendChild(this.mealType);
        this.element.appendChild(this.meatType);
        this.element.appendChild(this.sauceType);
    }
    render(parent){
        parent.appendChild(this.element);
    }
    getMealType(){
        return this.mealType.textContent;
    }
}

export default Meal;