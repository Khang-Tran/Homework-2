

document.addEventListener("DOMContentLoaded", function(event){

    document.getElementById("Add").addEventListener("click", function(){
        let Food = new food(
         document.getElementById("item").value,
         document.getElementById("quantity").value,
         document.getElementById("calories").value
        );
        if(!Food.IsValid()) {
            alert("Please enter in what you ate, how much of it and how many calories was it. The quantity and the calories should be numerical values");
        }
        else{
            list.push(Food);
            displayList(); 
        }
        document.getElementById("item").focus();
    });
});
let list = [];


let displayList = function(){
    let displayString = "", CalTotal = 0;

    for( let i in list ) {
        displayString += list[i].toString() + "\n";
        CalTotal += list[i].CalCount();
    }

    let TotalCalories = CalTotal;
    displayString +="\nTotal Caloric Intake: " + TotalCalories.toFixed(1);

   document.getElementById("foodList").value = displayString;
   document.getElementById("item").select();
}

   