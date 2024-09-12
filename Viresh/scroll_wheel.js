// https://dev.to/juanbelieni/how-to-create-horizontal-scroll-with-mouse-wheel-using-javascript-4cm5
// gebruikt de muouse wheel om links en rechts te scrollen

const element = document.querySelector(".horizontal_scroll_wrapper");

element.addEventListener('wheel', (event) => {
  event.preventDefault();

  element.scrollBy({
    left: event.deltaY *2,    
  });
});
