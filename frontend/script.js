
function loadEvent() {
const newCatButton = document.querySelector(".add-cat")  ;
newCatButton.addEventListener("click" , function() {
const catContainer = document.querySelector(".cat-conatiner");
const now = new Date ().getTime();
const newCat = `<img src="https://cataas.com/cat?random=${now}" alt="Új cica" />`;
catContainer.insertAdjacentHTML("beforeend", newCat);
})
}


window.addEventListener("load", loadEvent);
    