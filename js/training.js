/* ------------------------------------ */
/* --- Exercice 1 --- */
const btn1 = document.querySelector('#ex1 .js-btn');
const txt1 = document.getElementById('txt1');
btn1.addEventListener('click', function(e) {
    txt1.classList.toggle('hidden');
});

// function toggleText() {
//     txt1.classList.toggle('hidden');
// }
// btn1.addEventListener('click', toggleText);

// const btns = document.querySelectorAll('button[data-text-toggle-id]');
// for (const btn of btns) {
//     btn.addEventListener('click', function (e) {
//         const textId = this.dataset.textToggleId;
//         document.getElementById(textId).classList.toggle('hidden');
//     });
// }

// document.querySelectorAll('button[data-text-toggle-id]').forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         document.getElementById(this.dataset.textToggleId).classList.toggle('hidden');
//     });
// });


/* ------------------------------------ */
/* --- Exercice 2 --- */

function displayScroll() {
    document.getElementById('ex2-scroll-value').textContent = window.scrollY;
}
window.addEventListener('scroll', displayScroll);

// window.addEventListener('scroll', function() {
//     document.getElementById('ex2-scroll-value').textContent = window.scrollY;
// });


/* ------------------------------------ */
/* --- Exercice 3 --- */

const btn3 = document.querySelector('#ex3 .js-btn');
btn3.addEventListener('click', function(e) {
    const ulAnimals = document.querySelector('#ex3-animals');
    ulAnimals.appendChild(ulAnimals.firstElementChild);
});


/* ------------------------------------ */
/* --- Exercice 4 --- */

const btn4 = document.querySelector('#ex4 .js-btn');
let colors = ['blue', 'red', 'green', 'pink'];
let count = 0;
const primaryClass = btn4.className;
btn4.addEventListener('click', function(e) {
    this.className = primaryClass + " " + colors[count % colors.length];
    count++;
});

// document.querySelector('#ex4 .js-btn').addEventListener('click', function(e) {
//     if (this.classList.contains('blue')) {
//         this.classList.remove('blue');
//         this.classList.add('red');
//     }
//     else if (this.classList.contains('red')) {
//         this.classList.remove('red');
//         this.classList.add('green');
//     }
//     else {
//         this.classList.remove('green');
//         this.classList.add('blue');
//     }
// });

/* ------------------------------------ */
/* --- Exercice 5 --- */

function getRandomValue(max) {
    return Math.floor(Math.random()*max);
}

function getRandomColor() {
    return `rgb(${getRandomValue(256)}, ${getRandomValue(256)}, ${getRandomValue(256)})`;
    // return `#${getRandomValue(256).toString(16)}${getRandomValue(256).toString(16)}${getRandomValue(256).toString(16)}`;
}

// const btns5 = document.querySelectorAll('#list5 > li > button');
// btns5.forEach(function(button) {
//     button.addEventListener('mouseover', function(e) {
//         this.style.backgroundColor = getRandomColor();
//     });
// });

const list5 = document.getElementById('list5');
list5.addEventListener('mouseover', function(event) {
    if (event.target.tagName === 'BUTTON') {
        event.target.style.backgroundColor = getRandomColor();
    }
});


/* ------------------------------------ */
/* --- Exercice 6 --- */

const p6 = document.getElementById('ex6-paragraph');
const text6 = p6.innerText;
p6.innerText = '';

let count6 = 0;
const t = setInterval(function() {
    p6.textContent += text6[count6];
    count6++;
    if (text6[count6] === undefined) clearInterval(t);
}, 1000/20);


/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];

// document.getElementById('ex7-button').addEventListener('click', function(e) {
//     if (taskList.length === 0) return; 
    
//     const li = document.createElement('li');
//     li.innerText = taskList.pop();
//     li.classList.add('task-list-task');
//     document.getElementById('ex7-list').appendChild(li);

//     li.addEventListener('click', function(e) {
//         taskList.push(this.innerText);
//         this.remove();
//     });
// });



document.getElementById('ex7-button').addEventListener('click', function(e) {
    if (taskList.length === 0) return; 
    
    const li = document.createElement('li');
    li.innerText = taskList.pop();
    li.classList.add('task-list-task');
    document.getElementById('ex7-list').appendChild(li);
});

document.getElementById('ex7-list').addEventListener('click', function(e) {
    if (e.target.tagName !== 'LI') return;

    console.log(e.target)
    taskList.push(e.target.innerText);
    e.target.remove();
});


/* ------------------------------------ */
/* --- Exercice 8 --- */
