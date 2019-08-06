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

//greensock boxes
const contentImgs = document.querySelectorAll(".img-content img");
contentImgs.forEach(item => {
    item.addEventListener('load', (event) => {
        TweenMax.to(event.target, 0.5, {
            scale: 1,
            filter: 'grayscale(1) blur(3px)',
            ease: Power1.easeIn
        });
    });
    item.addEventListener('mouseover', (event) => {
        TweenMax.to(event.target, 1, {
            scale: 1.3,
            filter: 'none',
            ease: Elastic.easeOut.config(1, 0.75)
        })
    });
    item.addEventListener('mouseleave', (event) => {
        TweenMax.to(event.target, 0.5, {
            scale: 1,
            filter: 'grayscale(1) blur(3px)',
            ease: Power1.easeIn
        });
    });
})
console.log(contentImgs);