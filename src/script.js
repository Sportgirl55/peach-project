//Слайдер

var swiper = new Swiper(".slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".slider__btn_left",
    prevEl: ".slider__btn_right",
  },
  keyboard: true,
});

// Смена изображений карты

const mapMenu = document.querySelector(".offices__menu");
const dropdownBtn = document.querySelector(".offices__inner");
const submenu = document.querySelector(".offices__dropdown-menu");
const mapOfices = document.querySelector(".offices__map");
const dropdownArrow = document.querySelector(".offices__dropdown-arrow");
const offices = document.querySelector(".offices");

mapMenu.addEventListener("click", (e) => {
  if (e.target.className !== "offices__item") return;

  document.querySelector(
    ".offices__image"
  ).src = `./src/images/maps/${e.target.id}.png`;
  mapMenu
    .querySelectorAll("li")
    .forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");
});

dropdownBtn.addEventListener("mouseenter", (e) => {
  if (submenu.classList.contains("show")) return;

  mapMenu.style.opacity = 0.3;
  mapOfices.style.opacity = 0.3;
  mapMenu.querySelectorAll(".offices__item").forEach((item) => {
    item.style.pointerEvents = "none";
  });

  submenu.classList.toggle("show");
  dropdownArrow.style.transform = "rotateX(180deg)";
});

[submenu, mapOfices].forEach((item) => {
  item.addEventListener("click", (e) => {
    mapMenu.style.opacity = 1;
    mapOfices.style.opacity = 1;
    submenu.classList.remove("show");
    dropdownArrow.style.transform = "rotateX(360deg)";
    mapMenu.querySelectorAll(".offices__item").forEach((item) => {
      item.style.pointerEvents = "auto";
    });
  });
});

function updateButtonText() {
  const buttonText = document.querySelector(".hero .button__text");
  buttonText.innerHTML = window.innerWidth < 480 ? "Наш сайт" : "На сайт";
}

window.addEventListener("resize", updateButtonText);
updateButtonText();

// Работа меню 'Офисы Softline' на мобильных устройствах

const citySubmenu = document.querySelector(".submenu");
const isTouchDevice =
  "ontouchstart" in window ||
  navigator.maxTouchPoints > 0 ||
  navigator.msMaxTouchPoints > 0;

if (isTouchDevice) {
  citySubmenu.addEventListener("click", (event) => {
    event.stopPropagation();
    const submenuItem = event.target.closest(".submenu__item");
    const dropdownContent = submenuItem.querySelector(".submenu__links");
    if (!dropdownContent) return;

    citySubmenu.querySelectorAll(".submenu__links").forEach((item) => {
      item.style.display = "none";
    });

    citySubmenu.querySelectorAll(".submenu__item").forEach((item) => {
      item
        .querySelector(".submenu__item-name")
        .classList.remove("mobile_active");
    });

    submenuItem
      .querySelector(".submenu__item-name")
      .classList.add("mobile_active");
    dropdownContent.style.display =
      dropdownContent.style.display === "flex" ? "none" : "flex";
  });
}
