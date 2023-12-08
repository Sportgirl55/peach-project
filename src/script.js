// Смена изображений карты
const mapMenu = document.querySelector(".offices__menu");

mapMenu.addEventListener("click", (e) => {
  if (e.target.className !== "offices__item") return;

  document.querySelector(
    ".offices__image"
  ).src = `./src/images/${e.target.id}.png`;
  mapMenu
    .querySelectorAll("li")
    .forEach((item) => item.classList.remove("active"));
  e.target.classList.add("active");
});

const dropdownBtn = document.querySelector(".offices__inner");
const submenu = document.querySelector(".offices__dropdown-menu");
const menu = document.querySelector(".offices__menu");
const mapOfices = document.querySelector(".offices__map");
const dropdownArrow = document.querySelector(".offices__dropdown-arrow");

const offices = document.querySelector(".offices");

dropdownBtn.addEventListener("mouseenter", (e) => {
  if (submenu.classList.contains("show")) return;

  menu.style.opacity = 0.3;
  mapOfices.style.opacity = 0.3;
  menu.querySelectorAll(".offices__item").forEach((item) => {
    item.style.pointerEvents = "none";
  });

  submenu.classList.toggle("show");
  dropdownArrow.style.transform = "rotateX(180deg)";
});

[submenu, mapOfices].forEach((item) => {
  item.addEventListener("click", (e) => {
    menu.style.opacity = 1;
    mapOfices.style.opacity = 1;

    submenu.classList.toggle("show");
    dropdownArrow.style.transform = "rotateX(360deg)";
    menu.querySelectorAll(".offices__item").forEach((item) => {
      item.style.pointerEvents = "auto";
    });
  });
});
