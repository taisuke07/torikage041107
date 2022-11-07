class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.container = document.querySelector("#global-container");
    // var elems = document.querySelectorAll(".mobile-menu__link");
    //   for (var i = 0; i < elems.length; i++) 
    //   this.DOM.menu__link = elems[0];
    this.DOM.menu__link = document.querySelector(".mobile-menu__link");
    this.DOM.menu__drink = document.querySelector("#mobile-menu__drink");
    this.DOM.menu__weekday = document.querySelector("#mobile-menu__weekday");
    this.DOM.menu__guidance = document.querySelector("#mobile-menu__guidance");
    this.DOM.menu__store = document.querySelector("#mobile-menu__store");
    this.DOM.menu__contact = document.querySelector("#mobile-menu__contact");

    this.eventType = this._getEventType();
    this._addEvent();

  }

  _getEventType() {
    // const isTouchCapable =
    //   "ontouchstart" in window ||
    //   (window.DocumentTouch && document instanceof window.DocumentTouch) ||
    //   navigator.maxTouchPoints > 0 ||
    //   window.navigator.msMaxTouchPoints > 0;

    // return isTouchCapable ? "touchstart" : "click";
    // return "click";
    
    // const isTouchCapable = false;
    // return isTouchCapable ? "touchstart" : "click";
    const isTouchCapable = "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch);

    return isTouchCapable ? "touchstart" : "click";
    

  }

  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
    // this.menu__link.forEach(mobile-menu__link.classList.toggle('menu-open'));
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    
    this.DOM.menu__link.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__drink.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__weekday.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__guidance.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__store.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.menu__contact.addEventListener(this.eventType, this._toggle.bind(this));
    
  }

}

