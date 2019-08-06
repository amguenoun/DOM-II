// NavBar code
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
    item.addEventListener('click', (event) => {
        event.preventDefault();
    });
});

//HeaderImg code
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
headerImg.addEventListener('dragend', () => {
    const eventTarget = event.target.style;
    eventTarget.transform = "scale(1)";
    eventTarget.margin = "0% 0%";
})

const headerText = document.querySelector('.intro p');
headerText.addEventListener('mouseup', (event) => {
    const eventTarget = event.target.style;
    eventTarget.color = "white";
    eventTarget.background = "black";
    eventTarget.fontSize = "2rem";
});

//Destination Cards Code
const destinationCards = document.querySelectorAll(".destination");
destinationCards.forEach((item) => {
    item.addEventListener('dblclick', (event) => {
        const eventTarget = event.target.style;
        eventTarget.background = 'red';
    })
});

const destinationBtns = document.querySelectorAll(".destination .btn");
destinationBtns.forEach((item) => {
    item.addEventListener('contextmenu', (event) => {
        const eventTarget = event.target.style;
        eventTarget.background = 'green';
        event.stopPropagation();
    })
});
