
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];

const ingredientsAvailable = document.getElementById("salad-ingredients");
const ingredientsInSalad = document.getElementById("salad-final");
console.log(ingredientsAvailable);
console.log(ingredientsInSalad);


// for each ingredient in js list, add a button to the page
ingredients.forEach(function(ingredient) {

    // create the li and button related
    let ingredientBtn = document.createElement("li");
    let button = document.createElement("button");
    button.classList.add('button');
    ingredientBtn.appendChild(button);

    // add text to button
    ingredientBtn.textContent = ingredient;

    // add li to the DOM
    ingredientsAvailable.appendChild(ingredientBtn);
});

const listItemsAvailable = document.querySelectorAll("#salad-ingredients li")
console.log(listItemsAvailable);
