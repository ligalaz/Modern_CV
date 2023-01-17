import language from "./language.js";

class Storage {
  constructor(storageKeys, storageProviders) {
    this.storageThemeKey = storageKeys[0];
    this.storageLanguageKey = storageKeys[1];
    this.storageThemeProvider = storageProviders[0];
    this.storageLangProviders = storageProviders[1];
    this.storageThemeDarkValue = `dark`;
    this.storageThemeLightValue = `light`;
    this.storageLangDefaultValue = `en`;
    this.activeLanguage = `controller-language_active`;
  }

  initHosts() {
    this.themeSwitcher = document.querySelector(`.switcher_on`);
    this.laguageSwitchers = document.querySelectorAll(
      `.controller-language__item`,
    );
  }

  initProviders() {
    this.storageThemeProvider.dataset.theme =
      window.localStorage.getItem(this.storageThemeKey) ||
      this.storageThemeDarkValue;
    this.switchLanguage(
      localStorage.getItem(this.storageLanguageKey) ||
        this.storageLangDefaultValue,
    );
  }

  initListeners() {
    this.themeSwitcher.addEventListener(`click`, this.setTheme);
    this.laguageSwitchers[0].addEventListener(`click`, this.setLanguage);
    this.laguageSwitchers[1].addEventListener(`click`, this.setLanguage);
  }

  initialize() {
    this.initHosts();
    this.initProviders();
    this.initListeners();
  }

  switchHosts = (id) => {
    this.laguageSwitchers.forEach((switcher) =>
      switcher.id === id
        ? switcher.classList.add(this.activeLanguage)
        : switcher.classList.remove(this.activeLanguage),
    );
  };

  switchLanguage = (lang) => {
    const languages = language[lang];
    this.storageLangProviders.forEach((provider) => {
      provider.textContent = languages[provider.dataset.language];
    });
    this.switchHosts(lang);
  };

  setTheme = () => {
    this.storageThemeProvider.dataset.theme =
      this.storageThemeProvider.dataset.theme === this.storageThemeDarkValue
        ? this.storageThemeLightValue
        : this.storageThemeDarkValue;

    window.localStorage.setItem(
      this.storageThemeKey,
      this.storageThemeProvider.dataset.theme,
    );
  };

  setLanguage = (e) => {
    this.switchLanguage(e.target.id);
    window.localStorage.setItem(this.storageLanguageKey, e.target.id);
  };
}

export default Storage;
