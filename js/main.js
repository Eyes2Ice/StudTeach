// Слайдер услуг
const swiper = new Swiper(".services__slider", {
  spaceBetween: 34,
  slidesPerView: 4,

  navigation: {
    nextEl: ".services__next",
    prevEl: ".services__prev",
  },
});

// Слайдер отзывов
new Swiper(".testimonials__slider", {
  spaceBetween: 26,
  slidesPerView: 3,

  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev",
  },
});

// Ответы на вопросы
const accordionLists = document.querySelectorAll(".faq__list");

accordionLists.forEach((el) => {
  el.addEventListener("click", (e) => {
    const accordionList = e.currentTarget;
    const accordionControl = e.target.closest(".faq-item__control");
    if (!accordionControl) return;
    e.preventDefault();

    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;
    const currentlyOpenedItem =
      accordionList.querySelector(".faq__item--opened");

    if (accordionItem.classList.contains("faq__item--opened")) {
      accordionItem.classList.remove("faq__item--opened");
      accordionContent.style.maxHeight = null;
      return;
    }

    if (currentlyOpenedItem && currentlyOpenedItem !== accordionItem) {
      const openedContent =
        currentlyOpenedItem.querySelector(".faq-item__content");
      currentlyOpenedItem.classList.remove("faq__item--opened");
      openedContent.style.maxHeight = null;
    }

    accordionItem.classList.add("faq__item--opened");
    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
  });
});

// Бургер меню
document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".header__burger");
  const menuWrapper = document.querySelector(".header__wrapper");
  const body = document.body;

  if (burgerButton && menuWrapper) {
    burgerButton.addEventListener("click", function () {
      // Переключаем классы активности
      burgerButton.classList.toggle("header__burger--active");
      menuWrapper.classList.toggle("header__wrapper--active");
      body.classList.toggle("body--menu-opened");
    });

    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll(
      ".menu__link, .header__btn--active"
    );
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        burgerButton.classList.remove("header__burger--active");
        menuWrapper.classList.remove("header__wrapper--active");
        body.classList.remove("body--menu-opened");
      });
    });

    // Закрытие меню при нажатии Escape
    document.addEventListener("keydown", function (event) {
      if (
        event.key === "Escape" &&
        menuWrapper.classList.contains("header__wrapper--active")
      ) {
        burgerButton.classList.remove("header__burger--active");
        menuWrapper.classList.remove("header__wrapper--active");
        body.classList.remove("body--menu-opened");
      }
    });
  }
});
