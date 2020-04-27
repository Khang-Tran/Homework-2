let food = function (Item, quantity, calories){
    this.item = Item;
    this.quantity = parseFloat(quantity);
    this.calories=parseFloat(calories);
    this.CalCount = function(){
        return this.calories*this.quantity;
    };

}

food.prototype.IsValid = function(){
    if(this.iten=="" || isNaN(this.quantity) || isNaN(this.calories)){
        return false;
    }
    else if( this.quantity < 0){
        return false;
    }
    else{
        return true;
    }
}

food.prototype.toString = function() {
    
    return this.item + " , "+ this.quantity + " , " + this.calories;
}

