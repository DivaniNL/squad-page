// source: https://dev.to/juanbelieni/how-to-create-horizontal-scroll-with-mouse-wheel-using-javascript-4cm5
const element = document.querySelector('.horizontal-scroll-wrapper');

element.addEventListener('wheel', (event) => {
event.preventDefault();

element.scrollBy({
    left: event.deltaY < 0 ? -30 : 30,
    
    });
});