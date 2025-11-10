// Слайдер услуг
const swiper = new Swiper(".services__slider", {
  slidesPerView: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: ".services__next",
    prevEl: ".services__prev",
  },

  breakpoints: {
    1439: {
      slidesPerView: 4,
      spaceBetween: 34,
    },
    999: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
  },

  autoplay: {
    delay: 2000,
  },

  speed: 600,

  pauseOnInteraction: true,
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

// Слайдер преимуществ
new Swiper(".advantages__slider", {
  spaceBetween: 20,
  slidesPerView: 1,

  navigation: {
    nextEl: ".advantages__next",
    prevEl: ".advantages__prev",
  },

  autoplay: {
    delay: 2000,
  },

  speed: 600,

  pauseOnInteraction: true,
});

// Ответы на вопросы
// const accordionLists = document.querySelectorAll(".faq__list");

// accordionLists.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     const accordionList = e.currentTarget;
//     const accordionControl = e.target.closest(".faq-item__control");
//     if (!accordionControl) return;
//     e.preventDefault();

//     const accordionItem = accordionControl.parentElement;
//     const accordionContent = accordionControl.nextElementSibling;
//     const currentlyOpenedItem =
//       accordionList.querySelector(".faq__item--opened");

//     if (accordionItem.classList.contains("faq__item--opened")) {
//       accordionItem.classList.remove("faq__item--opened");
//       accordionContent.style.maxHeight = null;
//       return;
//     }

//     if (currentlyOpenedItem && currentlyOpenedItem !== accordionItem) {
//       const openedContent =
//         currentlyOpenedItem.querySelector(".faq-item__content");
//       currentlyOpenedItem.classList.remove("faq__item--opened");
//       openedContent.style.maxHeight = null;
//     }

//     accordionItem.classList.add("faq__item--opened");
//     accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
//   });
// });

// Ответы на вопросы
function initAccordion(accordionList) {
  accordionList.addEventListener("click", (e) => {
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
}

// Этапы
function initStageAccordion(accordionList) {
  // Автоматически открываем первую вкладку при инициализации
  const firstAccordionItem = accordionList.querySelector(".stage");
  const firstAccordionControl =
    firstAccordionItem?.querySelector(".stage__control");
  const firstAccordionContent = firstAccordionControl?.nextElementSibling;

  if (firstAccordionItem && firstAccordionControl && firstAccordionContent) {
    firstAccordionItem.classList.add("stage--opened");
    firstAccordionContent.style.maxHeight =
      firstAccordionContent.scrollHeight + "px";
  }

  // Обработчик кликов
  accordionList.addEventListener("click", (e) => {
    const accordionControl = e.target.closest(".stage__control");
    if (!accordionControl) return;
    e.preventDefault();

    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    if (accordionItem.classList.contains("stage--opened")) {
      accordionItem.classList.remove("stage--opened");
      accordionContent.style.maxHeight = null;
    } else {
      accordionItem.classList.add("stage--opened");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
}

// Инициализация всех аккордеонов
const accordionLists = document.querySelectorAll(".faq__list");
accordionLists.forEach(initAccordion);
const stageAccordions = document.querySelectorAll(".stages__list--accordion");
stageAccordions.forEach(initStageAccordion);

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

// Маска для инпута под номер телефона
const inputsTel = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(inputsTel);
