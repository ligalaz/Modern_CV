class Modal {
  constructor(modal, index) {
    this.modal = modal;
    this.index = index;
    this.open = `modal_open`;

    this.modalPaths = [
      `./resources/img/portfolio/photo_portfolio.jpg`,
      `./resources/img/portfolio/shelter_landing.jpg`,
      `./resources/img/portfolio/podcast_landing.jpg`,
      `./resources/img/portfolio/No_js_slider.jpg`,
      `./resources/img/portfolio/news_portal.jpg`,
      `./resources/img/portfolio/audio_player.jpg`,
      `./resources/img/portfolio/virtual_keyboard.jpg`,
      `./resources/img/portfolio/shop.jpg`,
      `./resources/img/portfolio/tic_tac_toe.jpg`,
      `./resources/img/portfolio/async_race.jpg`,
      `./resources/img/portfolio/memory_game.jpg`,
      `./resources/img/portfolio/rs_lang.jpg`,
    ];

    this.modalContents = [
      `Photographer portfolio`,
      `Shelter`,
      `Podcast`,
      `CSS Slider`,
      `News API`,
      `Custom Audio Player`,
      `Virtual Keyboard`,
      `Shop`,
      `Tic Tac Toe`,
      `Async Race`,
      `Memory Game`,
      `RS Lang`,
    ];

    this.modalLinks = [
      `https://ligalaz-photographer-portfolio.netlify.app/`,
      `https://rolling-scopes-school.github.io/ligalaz-JSFE2022Q1/Shelter/main/main.html`,
      `https://ligalaz.github.io/Podcast_landing/`,
      `https://ligalaz.github.io/cssMemSlider/cssMemSlider/index.html`,
      `https://rolling-scopes-school.github.io/ligalaz-JSFE2022Q1/MigrationToTs/dist/`,
      `https://ligalaz.github.io/Custom-Audio-Player/`,
      `https://ligalaz.github.io/Virtual-Keyboard-Webpack/dist/`,
      `https://ligalaz-shop.netlify.app/#/login`,
      `https://ligalaz.github.io/Tic-Tac-Toe-PvP-PvC-/`,
      `https://ligalaz-async-race.netlify.app/`,
      `https://ligalaz.github.io/Memory-Game-MVC-/dist/`,
      `https://ligalaz-rslang-154.netlify.app/main`,
    ];
  }

  initHosts() {
    this.imgs = document.querySelector(".imgs");
    this.modalImg = this.modal.querySelector(".modal-slider__img");
    this.modalContent = this.modal.querySelector(".modal-content__link");
    this.modalLink = this.modal.querySelector(".modal-link");
    this.modalCloseElement = this.modal.querySelector(`.modal-close`);
    this.modalLeft = this.modal.querySelector(`.arrow-left`);
    this.modalRight = this.modal.querySelector(`.arrow-right`);
  }

  initListeners() {
    this.imgs.addEventListener("click", this.modalOpen);

    this.modalCloseElement.addEventListener("click", this.modalClose);

    this.modalRight.addEventListener("click", () => {
      this.modalTurn(true);
    });

    this.modalLeft.addEventListener("click", () => {
      this.modalTurn(false);
    });
  }

  initialize() {
    this.initHosts();
    this.initListeners();
  }

  modalFindIndex = (source) => {
    this.index = this.modalPaths.findIndex((path) =>
      source.includes(path.slice(1)),
    );
  };

  modalTurn = (flag) => {
    if (flag) {
      this.index === this.modalPaths.length - 1
        ? (this.index = 0)
        : this.index++;
    } else {
      this.index === 0
        ? (this.index = this.modalPaths.length - 1)
        : this.index--;
    }

    this.modalImg.src = this.modalPaths[this.index];
    this.modalContent.textContent = this.modalContents[this.index];
    this.modalLink.href = this.modalLinks[this.index];
  };

  modalDefault = (source) => {
    this.modalImg.src = source;
    this.modalContent.textContent = this.modalContents[this.index];
    this.modalLink.href = this.modalLinks[this.index];
  };

  modalOpen = (e) => {
    const targetSource = e.target.src;

    this.modalFindIndex(targetSource);
    this.modalDefault(targetSource);

    this.modal.classList.add(this.open);
  };

  modalClose = () => {
    this.modal.classList.remove(this.open);
  };
}

export default Modal;
