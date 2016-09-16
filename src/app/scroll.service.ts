import { Injectable } from '@angular/core';
declare const $:any;

@Injectable()
export class ScrollService {

  constructor() { }

  setScrollTop(scrollNum, milliseconds = 300) {
      const events = "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",
        page = $("html, body");

      page.on(events, () =>  page.stop());
      page.animate({"scrollTop": scrollNum}, milliseconds, () => page.off(events));
  }

  getScrollPosition(){
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}
