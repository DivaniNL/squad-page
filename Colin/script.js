document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,

        // Navigation
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Autoplay (optioneel)
        autoplay: {
            delay: 5000,
        },
    });
});
