let myBtn = document.querySelector(".menu");
let myLinks = document.querySelector(".btn");

//A function to hide the menu once the page is reloaded so that it doesn't stay there forever in case we forget to click on it
window.onload = () => {
    myLinks.classList.remove("list");
};

//A function to show the menu bar or hide it based on a click
myBtn.addEventListener("click", () => {
    myLinks.classList.toggle("list");
});