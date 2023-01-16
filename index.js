import Modal from "./modal.js";

const modal = new Modal(document.querySelector(`.modal`, 0));
modal.initialize();

const burger = document.querySelector(".burger");

const navigation = document.querySelector(".header__navigation");

burger.addEventListener("click", () => {
  navigation.classList.toggle("active");
});
