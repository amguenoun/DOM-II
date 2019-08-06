// Your code goes here
const navBar = document.querySelectorAll('.nav-link');
navBar.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        event.target.style.background = "black";
        event.target.style.color = "white";
        event.target.style.padding = "1% 2%";
    });
});