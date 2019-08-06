const blocksContainer = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');
blocks.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.remove();
        blocksContainer.prepend(event.target);
    });
});
