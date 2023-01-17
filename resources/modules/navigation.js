import Reverser from "./reverser.js";

class Navigation {
  constructor(burger, navigation) {
    this.burger = burger;
    this.navigation = navigation;
    this.link = `.cv__link`;
    this.burgerOpen = `burger_open`;
    this.navigationActive = `header__navigation_active`;
    this.activeLink = `cv__link_active`;
    this.linkOpacity = `cv__link_step_opacity`;

    this.reverser = new Reverser(
      document.querySelector(`.cv-back`),
      document.querySelector(`.cv-front`),
    );
  }

  initHosts() {
    this.links = this.navigation.querySelectorAll(this.link);
  }

  initListeners() {
    this.burger.addEventListener(`click`, (e) => {
      e.currentTarget.classList.contains(this.burgerOpen)
        ? this.hideNavigation()
        : this.showNavigation();

      this.linksAnimationToggle(e, 0.5);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        this.burger.classList.contains(this.burgerOpen)
          ? this.hideNavigation()
          : null;
      }
    });

    for (let link of this.links) {
      link.addEventListener(`click`, this.setActiveLink);
    }
  }

  initialize() {
    this.initHosts();
    this.initListeners();
  }

  setActiveLink = (e) => {
    const target = e.target;

    this.links.forEach((link) =>
      link !== e.target
        ? link.classList.remove(this.activeLink)
        : link.classList.add(this.activeLink),
    );
    this.hideNavigation();
    this.reverser.navigateReverse();
  };

  linksAnimationToggle = (e, ms) => {
    e.currentTarget.classList.contains(this.burgerOpen)
      ? this.links.forEach((link, idx) => {
          link.classList.add(this.linkOpacity);
          link.style.animationDelay = `${idx * ms}s`;
        })
      : this.links.forEach((link) => {
          link.classList.remove(this.linkOpacity);
        });
  };

  hideNavigation = () => {
    this.burger.classList.remove(this.burgerOpen);
    this.navigation.classList.remove(this.navigationActive);
  };

  showNavigation = () => {
    this.burger.classList.add(this.burgerOpen);
    this.navigation.classList.add(this.navigationActive);
  };
}

export default Navigation;
