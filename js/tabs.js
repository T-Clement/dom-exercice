const tabs = document.querySelectorAll("#tabs .tabs-js");
console.log(tabs);
tabs.forEach( (tab) => {
    tab.addEventListener("click", function(e) {
    console.log(e.target);
    console.log("test " +tab);
    console.log(document.querySelector("#tabs .tabs-item .active"));

    // get identity of previous active tab
    const tabActive = document.querySelector("#tabs .tabs-item .active");
    console.log("Previous Active: " + tabActive);
    console.log("Previous Active: " + tabActive.dataset.tab)

    //remove
    tabActive.classList.remove("active");
    console.log(document.querySelector(`#${tabActive.dataset.tab}`));
    document.querySelector(`#${tabActive.dataset.tab}`).classList.remove('active');
    console.log(document.querySelector(`#${tabActive.dataset.tab}`));

    // console.log("remove " + document.querySelector.dataset.tabContent)

    // add class active
    tab.classList.add("active");
    // document.querySelector()
    console.log(tab);
    //add active to related article
    document.querySelector(`#${tab.dataset.tab}`).classList.add("active");
})});