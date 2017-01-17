let defaults = {};

export default class Settings {
  constructor() {
    if (Settings.singletonInstance) {
      return Settings.singletonInstance;
    }

    Settings.singletonInstance = this;

    this.load();
  }

  load() {
    this.settings = Object.assign({}, defaults, JSON.parse(localStorage.getItem('settings')));
  }

  save() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  option(key, value) {
    if(value != null) {
      this.settings[key] = value;
      //console.log(this.settings);
      this.save();
    }
    return this.settings[key];
  }
}
