const swiper = new Swiper(".swiper-container", {
  loop: true,
  initialSlide: 2,
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 480px
    550: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 5,
      centeredSlides: true,
      spaceBetween: -37
    }
  }
});