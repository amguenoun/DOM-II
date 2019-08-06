// Your code goes here
const navBar = document.querySelectorAll('.nav-link');
navBar.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        const eventTarget = event.target.style;
        eventTarget.background = "black";
        eventTarget.color = "white";
        eventTarget.padding = "1% 2%";

    });
    item.addEventListener('mouseleave', (event) => {
        const eventTarget = event.target.style;
        eventTarget.background = "white";
        eventTarget.color = "black";
        eventTarget.padding = "0%";
    });
});