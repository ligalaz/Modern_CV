import Storage from "./resources/modules/storage.js";
import Modal from "./resources/modules/modal.js";
import Navigation from "./resources/modules/navigation.js";
import Reverser from "./resources/modules/reverser.js";

const storage = new Storage(
  [`cv_theme`, `cv_language`],
  [document.body, document.querySelectorAll(`[data-language]`)],
);
storage.initialize();

const reverser = new Reverser(
  document.querySelector(`.cv-back`),
  document.querySelector(`.cv-front`),
);
reverser.initialize();

const navigation = new Navigation(
  document.querySelector(".burger"),
  document.querySelector(".header__navigation"),
);
navigation.initialize();

const modal = new Modal(document.querySelector(`.modal`, 0));
modal.initialize();
