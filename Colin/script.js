const swiper = new Swiper(".swiper-container", {
  loop: true,
  initialSlide: 2,
  slidesPerView: 1, // aantal zichtbare slides
  spaceBetween: 0,
  centeredSlides: false,
  navigation: { //buttons voor navigeren
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 480px tablet
    550: {
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 0,
    },
    // when window width is >= 640px desktop
    900: {
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: -37
    }
  }
});