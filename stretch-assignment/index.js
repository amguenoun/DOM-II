const blocksContainer = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');
blocks.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.remove();
        blocksContainer.prepend(event.target);
    });
    item.addEventListener('mousedown', (event) => {
        TweenMax.to(event.target, 1, {
            x: 1000,
            ease: Elastic.easeOut.config(1, 0.75)
        })

    });
});
