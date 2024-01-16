export var swiper = new Swiper(".slider", {
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
