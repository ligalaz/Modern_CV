class Navigation {
  constructor(burger, navigation) {
    this.burger = burger;
    this.navigation = navigation;
    this.link = `.cv__link`;
    this.burgerOpen = `burger_open`;
    this.navigationActive = `header__navigation_active`;
    this.activeLink = `cv__link_active`;
  }

  initHosts() {
    this.links = this.navigation.querySelectorAll(this.link);
  }

  initListeners() {
    this.burger.addEventListener(`click`, (e) => {
      e.currentTarget.classList.contains(this.burgerOpen)
        ? this.hideNavigation()
        : this.showNavigation();
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
