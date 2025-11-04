// Слайдер услуг
const swiper = new Swiper(".services__slider", {
  spaceBetween: 34,
  slidesPerView: 4,

  navigation: {
    nextEl: ".services__next",
    prevEl: ".services__prev",
  },
});
