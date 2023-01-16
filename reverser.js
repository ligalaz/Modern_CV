class Reverser {
  constructor(back, front) {
    this.back = back;
    this.front = front;
    this.backOpen = `cv-back_open`;
    this.frontClose = `cv-front_close`;
  }

  initHosts() {
    this.reverser = document.querySelector(`.reverser`);
  }

  initListeners() {
    this.reverser.addEventListener(`click`, this.cardReverse);
  }

  initialize() {
    this.initHosts();
    this.initListeners();
  }

  addReverse = () => {
    this.back.classList.add(this.backOpen);
    this.front.classList.add(this.frontClose);
  };
  removeReverse = () => {
    this.back.classList.remove(this.backOpen);
    this.front.classList.remove(this.frontClose);
  };
  cardReverse = () => {
    !this.back.classList.contains(this.backOpen)
      ? this.addReverse()
      : this.removeReverse();
  };

  navigateReverse = () => {
    !this.back.classList.contains(this.backOpen) ? this.addReverse() : null;
  };
}

export default Reverser;
