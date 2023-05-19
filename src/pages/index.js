window.onload = function () {
  document.querySelector(".page").classList.remove("page_preload");
};

import "../pages/index.css";
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
