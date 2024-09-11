const swiper = new Swiper(".swiper-container", {
  loop: true,
  initialSlide: 1,
  slidesPerView: 1,
  spaceBetween: 20,
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
      spaceBetween: 20,
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 0
    }
  }
});