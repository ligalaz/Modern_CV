class Reverser {
  constructor(back, front) {
    this.back = back;
    this.front = front;
    this.card = document.body;

    this.controllers = document.querySelectorAll(`.controller__button`);
    this.links = document.querySelectorAll(`.cv__link_tablet`);
    this.backOpen = `cv-back_open`;
    this.frontClose = `cv-front_close`;
    this.cardStatus = [`body_front`, `body_back`];
    this.animationName = `slow-opacity`;
  }

  initHosts() {
    this.reverser = document.querySelector(`.reverser_on`);
  }

  initListeners() {
    this.reverser.addEventListener(`click`, this.cardReverse);

    window.addEventListener(`animationend`, () => {
      this.setAnimation(0, false);
    });

    window.addEventListener(`load`, () => {
      window.location.hash = ``;
      window.scrollBy(0, -window.pageYOffset);
    });
  }

  initialize() {
    this.initHosts();
    this.initListeners();
  }

  addReverse = () => {
    this.back.classList.add(this.backOpen);
    this.front.classList.add(this.frontClose);
    this.card.style.overflowY = `auto`;
    this.changeCardStatus();
    this.setAnimation(2, true);
  };
  removeReverse = () => {
    this.back.classList.remove(this.backOpen);
    this.front.classList.remove(this.frontClose);
    this.setAnimation(2, true);
    this.setDefault();
  };
  cardReverse = () => {
    !this.back.classList.contains(this.backOpen)
      ? this.addReverse()
      : this.removeReverse();
  };

  navigateReverse = () => {
    !this.back.classList.contains(this.backOpen) ? this.addReverse() : null;
  };

  changeCardStatus = () => {
    if (this.card.classList.contains(this.cardStatus[0])) {
      this.card.classList.add(this.cardStatus[1]);
      this.card.classList.remove(this.cardStatus[0]);
    } else if (this.card.classList.contains(this.cardStatus[1])) {
      setTimeout(() => {
        this.card.classList.add(this.cardStatus[0]);
        this.card.classList.remove(this.cardStatus[1]);
      }, 2000);
    }
  };

  setAnimation = (ms, flag) => {
    flag
      ? this.controllers.forEach((controller) => {
          controller.style.animation = `${this.animationName} ${ms}s`;
        })
      : this.controllers.forEach((controller) => {
          controller.style.animation = `none`;
        });
  };

  setDefault = () => {
    const activeLink = `cv__link_active`;
    this.card.style.overflowY = `hidden`;
    this.changeCardStatus();
    this.links.forEach((link) => link.classList.remove(activeLink));
    setTimeout(() => {
      this.links[0].classList.add(activeLink);
    }, 700);
  };
}

export default Reverser;
