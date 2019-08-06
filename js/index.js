// Your code goes here
const navBar = document.querySelectorAll('.nav-link');
navBar.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        event.target.style.background = "black";
        event.target.style.color = "white";
        event.target.style.padding = "1% 2%";
    });
    item.addEventListener('mouseleave', (event) => {
        event.target.style.background = "white";
        event.target.style.color = "black";
        event.target.style.padding = "0%";
    });
});