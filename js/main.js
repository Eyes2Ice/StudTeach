// Слайдер услуг
const swiper = new Swiper(".services__slider", {
  spaceBetween: 34,
  slidesPerView: 4,

  navigation: {
    nextEl: ".services__next",
    prevEl: ".services__prev",
  },
});

new Swiper(".testimonials__slider", {
  spaceBetween: 26,
  slidesPerView: 3,

  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev",
  },
});
