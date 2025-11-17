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
  spaceBetween: 20,
  slidesPerView: 1,

  navigation: {
    nextEl: ".testimonials__next",
    prevEl: ".testimonials__prev",
  },

  breakpoints: {
    1439: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
    899: {
      slidesPerView: 2,
      spaceBetween: 26,
    },
  },

  autoplay: {
    delay: 2000,
  },

  speed: 600,

  pauseOnInteraction: true,
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

// Модалка
const modal = document.querySelector(".modal");
const modalButtons = document.querySelectorAll(".button--open-modal"); // все кнопки

modalButtons.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

if (modal) modal.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (
    event.code === "Escape" &&
    document.body.classList.contains("body--opened-modal")
  ) {
    document.body.classList.remove("body--opened-modal");
  }
});

function openModal(e) {
  e.preventDefault();
  document.body.classList.add("body--opened-modal");
}

function closeModal(e) {
  if (!e) {
    document.body.classList.remove("body--opened-modal");
    return;
  }

  const target = e.target;

  if (
    target.closest(".modal__close") ||
    target.closest(".button") ||
    target.classList.contains("modal")
  ) {
    e.preventDefault(); // ← переместили сюда
    document.body.classList.remove("body--opened-modal");
  }
}

// Прелоадер
(function () {
  var PAGES = 18;
  var DURATION = 6.8;
  var bookSelector = "#preloader .book";
  var pagesContainerSelector = "#preloader .book ul.pages";
  var preloaderSelector = "#preloader";

  function generatePageKeyframes(index) {
    var delay = index * 1.86;
    var delayAfter = index * 1.74;

    function fmt(n) {
      return (Math.round(n * 1000) / 1000).toString();
    }

    var p1 = fmt(4 + delay);
    var p2 = fmt(13 + delayAfter);
    var p3 = fmt(54 + delay);
    var p4 = fmt(63 + delayAfter);

    return (
      "\
@keyframes pageAnim" +
      index +
      " { \
  " +
      p1 +
      "% { transform: rotateZ(0deg) translateX(-18px); } \
  " +
      p2 +
      "%, " +
      p3 +
      "% { transform: rotateZ(180deg) translateX(-18px); } \
  " +
      p4 +
      "% { transform: rotateZ(0deg) translateX(-18px); } \
}"
    );
  }

  function injectKeyframes() {
    var style = document.createElement("style");
    style.type = "text/css";

    var css = "";
    for (var i = 0; i < PAGES; i++) {
      css += generatePageKeyframes(i) + "\n";
    }
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  function buildPages() {
    var ul = document.querySelector(pagesContainerSelector);
    if (!ul) return;

    ul.innerHTML = "";

    for (var i = 0; i < PAGES; i++) {
      var li = document.createElement("li");
      li.style.animationName = "pageAnim" + i;
      li.style.animationDuration = DURATION + "s";
      li.style.animationTimingFunction = "ease";
      li.style.animationIterationCount = "infinite";
      ul.appendChild(li);
    }
  }

  function setupHideLogic() {
    var preloader = document.querySelector(preloaderSelector);
    if (!preloader) return;

    var MIN_SHOW = 350; // ms
    var startTime = Date.now();

    window.addEventListener("load", function () {
      var elapsed = Date.now() - startTime;
      var delay = Math.max(0, MIN_SHOW - elapsed);

      setTimeout(function () {
        preloader.classList.add("preloader--hidden");
        document.body.classList.remove("body--preload");

        function onEnd(e) {
          if (e.propertyName === "opacity") {
            preloader.removeEventListener("transitionend", onEnd);
            if (preloader.parentNode)
              preloader.parentNode.removeChild(preloader);
          }
        }
        preloader.addEventListener("transitionend", onEnd);

        setTimeout(function () {
          if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
        }, 800);
      }, delay);
    });
  }

  if (!document.body.classList.contains("body--preload")) {
    document.body.classList.add("body--preload");
  }

  injectKeyframes();
  buildPages();
  setupHideLogic();
})();

// Адаптив для широких экранов
const BASE_WIDTH = 1920;
const wrapper = document.getElementById("wrapper");

const popup = document.querySelector(".modal");
const modalWrapper = popup ? popup.querySelector(".modal__wrapper") : null;

let popupBaseWidth = null;

function ensurePopupBaseWidth() {
  if (!modalWrapper || popupBaseWidth) return;
  const prevTransform = modalWrapper.style.transform;
  modalWrapper.style.transform = "none";

  const rect = modalWrapper.getBoundingClientRect();
  if (rect.width > 0) popupBaseWidth = Math.round(rect.width);

  modalWrapper.style.transform = prevTransform;
}

function applyPageScale() {
  if (!wrapper) return;
  const w = window.innerWidth;
  const scale = w / BASE_WIDTH;

  if (w <= BASE_WIDTH) {
    wrapper.style.transform = "none";
    wrapper.style.width = "100%";
    document.body.style.width = "100%";
    return;
  }

  wrapper.style.transformOrigin = "top left";
  wrapper.style.transform = `scale(${scale})`;
  wrapper.style.width = BASE_WIDTH + "px";
  document.body.style.width = BASE_WIDTH * scale + "px";
}

function applyPopupScale() {
  if (!popup || !modalWrapper) return;
  if (wrapper && wrapper.contains(popup)) {
    modalWrapper.style.transform = "none";
    modalWrapper.style.width = "";
    return;
  }

  const w = window.innerWidth;
  const scale = w / BASE_WIDTH;

  ensurePopupBaseWidth();

  if (w <= BASE_WIDTH) {
    modalWrapper.style.transform = "none";
    if (popupBaseWidth) modalWrapper.style.width = ""; // пусть css управляет
    return;
  }

  modalWrapper.style.transformOrigin = "center center";
  modalWrapper.style.transform = `scale(${scale})`;

  if (popupBaseWidth) {
    modalWrapper.style.width = popupBaseWidth + "px";
  }
}

function applyScaleAll() {
  applyPageScale();
  applyPopupScale();
}

window.addEventListener("resize", applyScaleAll);

applyScaleAll();
