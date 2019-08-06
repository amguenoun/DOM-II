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

const headerImg = document.querySelector('.intro img');
headerImg.addEventListener('load', (event) => {
    const eventTarget = event.target.style;
    eventTarget.opacity = "0.3";
});
headerImg.addEventListener('mouseover', (event) => {
    const eventTarget = event.target.style;
    eventTarget.opacity = "1";
});


headerImg.addEventListener('drag', () => {
    const eventTarget = event.target.style;
    eventTarget.transform = "scale(1.2)";
    eventTarget.margin = "3% 0%";
})

console.log();