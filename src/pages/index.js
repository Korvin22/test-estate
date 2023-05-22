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

function openMenu() {
  menu.classList.add("menu_opened");
}

function closeMenu() {
  menu.classList.remove("menu_opened");
}

menu.addEventListener(click, () => {
  openMenu();
});
