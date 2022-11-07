document.addEventListener('DOMContentLoaded',function(){
  const main = new Main();
});
  // const hero = new HeroSlider('.swiper');
  // hero.start();

  // const cb = function (el, isIntersecting) {
  //   if(isIntersecting) {
  //       const ta = new TweenTextAnimation(el);
  //       ta.animate();
  //   }
  // }

  // const so = new ScrollObserver('.animate-title', cb);

  // const _inviewAnimation = function(el, inview){
  //   if(inview){
  //     el.classList.add('inview');
  //   }else{
  //     el.classList.remove('inview');

  //   }
  // }
  
  // const so2 = new ScrollObserver('.cover-slide', _inviewAnimation);
  
  // const header = document.querySelector('.header');
  // const _navAnimation = function(el, inview){
  //   if(inview){
  //     header.classList.remove('triggered');
  //   }else{
  //     header.classList.add('triggered');

  //   }
  // }

  // const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once:false});

  
  // new MobileMenu();

  



class Main {
  constructor(){
    this.header = document.querySelector('.header');
    this.sides = document.querySelectorAll('.side');
    this._observers = [];
    this._init();
  }

  set observers(val){
    this._observers.push(val);
  }

  get observers(){
    return this._observers;
  }

  _init(){
    new MobileMenu();
    this.hero = new HeroSlider('.swiper');
    this.heroslide = new MenuSlider('.swiperslide');
    Pace.on('done', this._paceDone.bind(this));
  }

  _paceDone(){
    this._scrollInit();
  }

  _navAnimation(el, isIntersecting) {
    if(isIntersecting){
      this.header.classList.remove('triggered');
    }else{
      this.header.classList.add('triggered');

    }
  }

  _sideAnimation(el, isIntersecting) {
    if(isIntersecting){
      this.sides.forEach(side => side.classList.add('inview'));
    }else{
      this.sides.forEach(side => side.classList.remove('inview'));
    }
  }

  _inviewAnimation(el, isIntersecting){
    if(isIntersecting){
      el.classList.add('inview');

    }else{
      el.classList.remove('inview');
    }
  }

  _textAnimation(el, isIntersecting) {
    if(isIntersecting) {
        const ta = new TweenTextAnimation(el);
        ta.animate();
    }
  }

  _toggleSlideAnimation(el, isIntersecting) {
    if(isIntersecting){
      this.hero.start();
    }else{
      this.hero.stop();
    }
  }

  _oggleSlideAnimation(el, isIntersecting) {
    if(isIntersecting){
      this.heroslide.start();
    }else{
      this.heroslide.stop();

    }
  }

  _scrollInit() {
    this._observers = new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once:false});
    this._observers = new ScrollObserver('.cover-slide', this._inviewAnimation );
    this._observers = new ScrollObserver('.tween-animate-title', this._textAnimation,{rootMargin:"-200px 0px"} );
    this._observers = new ScrollObserver('.swiper', this._toggleSlideAnimation.bind(this),{once:false} );
    this._observers = new ScrollObserver('.swiperslide', this._oggleSlideAnimation.bind(this),{once:false} );
    this._observers = new ScrollObserver('.appear', this._inviewAnimation );
    this._observers = new ScrollObserver('#main-content', this._sideAnimation.bind(this), { once:false, rootMargin:"-300px 0px" });
  }
}

