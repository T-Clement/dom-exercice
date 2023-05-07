
const ingredients = ["🍅", "🥑", "🥕", "🌽", "🌶️", "🥦", "🥒", "🍄", "🧄", "🧅", "🧀", "🍠", "🥚", "🥬"];
const ingredientsAvailable = document.getElementById("salad-ingredients");
console.log(ingredientsAvailable);


const ingredientsPicked = [];
const ingredientsInSalad = document.getElementById("salad-final");
console.log(ingredientsInSalad);


// for each ingredient in js list, add a button to the page
ingredients.forEach(function(ingredient) {

    // create the li and button related
    let li = document.createElement("li");
    let button = document.createElement("button");
    button.classList.add('button');
    li.appendChild(button);
    // console.log("Button: " + button)

    // add text to button
    button.textContent = ingredient;

    // add li to the DOM
    ingredientsAvailable.appendChild(li);
});

const listItemsAvailable = document.querySelectorAll("#salad-ingredients li");
console.log(listItemsAvailable);

const listItemsAvailableBtn = document.querySelectorAll("#salad-ingredients li .button");
console.log(listItemsAvailableBtn);

// listItemsAvailableBtn.addEventListener


// eventListener, if click -> passed in salad-list

// const ingredientsInSalad = document.getElementById("salad-final");
ingredientsAvailable.addEventListener("click", function(event) {

    // if click on != button, quit function
    if (event.target.tagName !== 'BUTTON') return;



    // block to 5 ingredients
    if (ingredientsPicked.length >= 5) return;


    console.log("EVENT " +event.target.innerText);
    // console.log(this);
    console.log(ingredientsInSalad);


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
});

// handle click on ul !!!!!!!!

ingredientsPicked.addEventListener("click", function() {

})