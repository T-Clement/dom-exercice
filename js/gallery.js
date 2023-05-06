const mainPicture = document.getElementById("gallery-picture");
const mainTitle = document.getElementById('gallery-title');
const mainDescription = document.getElementById('gallery-description');
// console.log(mainPicture);
// console.log(mainTitle);
// console.log(mainDescription);

const galleryPictures = document.querySelectorAll('#gallery-thumbs .js-img');
const gallery = document.getElementById("gallery-thumbs");
// console.log(galleryPictures);
// console.log(gallery);


// try again but with a better target at the beginning, not the nodeList

gallery.addEventListener('mouseover', function(e) {
    // use of e.target to target the element who trigger the eventListener
    console.log(e.target);
    let newSource = e.target.src;
    if (newSource == undefined) {
        console.warn('Gérer le cas undefined entre les li/img')
        return
    } 
    // src of target image 
    // console.log("image src: " + newSource);
    mainPicture.src = newSource;
    mainPicture.alt = e.target.alt;
    // console.log(mainPicture);
    mainTitle.innerText = e.target.dataset.title;
    mainDescription.innerText = e.target.dataset.description;
})