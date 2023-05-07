
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];
const ingredientsAvailable = document.getElementById("salad-ingredients");
console.log(ingredientsAvailable);


const ingredientsPicked = [];
const ingredientsInSalad = document.getElementById("salad-final");
console.log(ingredientsInSalad);


let counterDOM = document.getElementById("salad-count");
counter = 0;

// ------------------------------------------------------------------------------
// for each ingredient in js list, add a button to the page
ingredients.forEach(function(ingredient) {

    // create the li and button related
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.classList.add('button');
    li.appendChild(button);

    // add text to button
    button.textContent = ingredient;
    // add li to the DOM
    ingredientsAvailable.appendChild(li);
    // ingredient.pop(); 
});


// // for dev purposes
// const listItemsAvailable = document.querySelectorAll("#salad-ingredients li");
// console.log(listItemsAvailable);

// const listItemsAvailableBtn = document.querySelectorAll("#salad-ingredients li .button");
// console.log(listItemsAvailableBtn);



//------------------------------------------------------------------------------------------------
// side available, if click remove to current list and add to picked list
ingredientsAvailable.addEventListener("click", function(event) {

    // if click on != button, quit function
    if (event.target.tagName !== 'BUTTON') return;

    // block to 5 ingredients
    if (ingredientsPicked.length >= 5) return;


    console.log("EVENT " +event.target.innerText);
    

    console.log(ingredientsInSalad);

    // remove ingredient clicked of ingredient js-list
    let index = ingredients.indexOf(`${event.target.innerText}`);
    ingredients.splice(index, 1);

    // remove from ingredients available of HTML list
    event.target.remove();


    // add picked indredients to list
    ingredientsPicked.push(event.target.innerText);

    // create li element
    let saladItem = document.createElement("li");
    // create button element
    let button = document.createElement("button");
    button.classList.add("button");
    // add button inside li
    saladItem.appendChild(button);
    // button take text content from button who gets clicked
    button.textContent = event.target.innerText;
    // add li to ul of picked ingredients
    ingredientsInSalad.appendChild(saladItem);


    console.log(ingredientsPicked);
    console.log(ingredients);
    counter++;
    counterDOM.innerText = counter;
});



//----------------------------------------------------------------------------------------------
ingredientsInSalad.addEventListener("click", function(event) {
    if (event.target.tagName !== 'BUTTON') return;
    ingredients.push(event.target.innerText);
    console.log(ingredients);

    // create li element
    let saladItem = document.createElement("li");
    // create button element
    let button = document.createElement("button");
    button.classList.add("button");
    // add button inside li
    saladItem.appendChild(button);
    // button take text content from button who gets clicked
    button.textContent = event.target.innerText;
    // add li to ul of picked ingredients
    ingredientsAvailable.appendChild(saladItem);
    event.target.remove();

    // remove ingredient clicked of ingredientPicked js-list
    let index = ingredientsPicked.indexOf(`${event.target.innerText}`);
    ingredientsPicked.splice(index, 1);
    counter--;
    counterDOM.innerText = counter;

})