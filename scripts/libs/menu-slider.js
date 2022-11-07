class MenuSlider  {
  constructor(el) {
    this.el = el;
    this.swiperslide = this._initSwiperslide();
  }

  _initSwiperslide() {
    return new Swiper(this.el, {
      // Optional: parameters,
      // direction: 'vertical',
      
      loop: true,
      grabCursor: true,
      // effect: 'coverflow',
      spaceBetween:10,
      centeredSlides:true,
      slidesPerView: 1,
      speed: 1000,
      breakpoints: {
        600: {
          slidesPerView: 2,
        }
      },

      // navigation:{
      //   nextEl:'.swiper-button-next',
      //   prevEl:'.swiper-button-prev',
      // }
    });

  }

  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false
    }, options);

    this.swiperslide.params.autoplay = options;
    this.swiperslide.autoplay.start();
  }

  stop() {
    this.swiperslide.autoplay.stop();
  }


}
