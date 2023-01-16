import Modal from "./modal.js";
import Navigation from "./navigation.js";
import Reverser from "./reverser.js";

const modal = new Modal(document.querySelector(`.modal`, 0));
modal.initialize();

const navigation = new Navigation(
  document.querySelector(".burger"),
  document.querySelector(".header__navigation"),
);

navigation.initialize();

const reverser = new Reverser(
  document.querySelector(`.cv-back`),
  document.querySelector(`.cv-front`),
);

reverser.initialize();
