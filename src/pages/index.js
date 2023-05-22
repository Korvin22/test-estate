window.onload = function () {
  document.querySelector(".page").classList.remove("page_preload");
};
import "../pages/index.css";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const menu = document.querySelector(".header__button");
const closeButton = document.querySelector(".menu__button-close");
const complex = document.querySelector(".menu__link_complex");
const buy = document.querySelector(".menu__link_buy");
function openMenu() {
  document.querySelector(".menu").classList.add("menu_opened");
}

function toggleComplex() {
  document.querySelector(".menu__list_complex").classList.toggle("menu__list_complex_opened");
}
function toggleBuy() {
  document.querySelector(".menu__list_buy").classList.toggle("menu__list_complex_opened");
}

function closeMenu() {
  document.querySelector(".menu").classList.remove("menu_opened");
}

menu.addEventListener("click", () => {
  openMenu();
});

closeButton.addEventListener("click", () => {
  closeMenu();
});
complex.addEventListener("click", () => {
  toggleComplex();
})

buy.addEventListener("click", () => {
  toggleBuy();
})
