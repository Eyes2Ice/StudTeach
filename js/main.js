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
