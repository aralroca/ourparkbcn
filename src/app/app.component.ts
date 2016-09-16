import { Component, HostListener } from '@angular/core';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  template: `<div class="fade-in">
              <app-menu [menuPosition]="menuPosition" 
                        [menuItems]="menuItems" 
                        [isMobileMenuOpened]="isMobileMenuOpened"
                        (setMobileMenuStatus)="setMobileMenuStatus($event)">
              </app-menu>
              <app-cover></app-cover>
              <app-section>
                  <router-outlet></router-outlet>
              </app-section>
              <app-footer></app-footer>
             </div>`,
  styles: [``]
})
export class AppComponent {

  public menuPosition:string;
  public isMobileMenuOpened:boolean = false;
  public menuItems = [
    {
      "name": "Sobre nosotros",
      "link": "/about-us"
    },
    {
      "name": "Instalaciones",
      "link": "/instalations"
    },
    {
      "name": "Clases",
      "link": "/classes"
    },
    {
      "name": "Eventos",
      "link": "/events"
    },
    {
      "name": "Contacto",
      "link": "/contact"
    }
  ];

  constructor(private scrollService: ScrollService){
    this.initMenuPosition.call(this);
  }

  private isMobile(){
    return window.innerWidth<768;
  }

  public setMobileMenuStatus(status){
    this.isMobileMenuOpened = status;
  }
  
  @HostListener('window:scroll', ['$event']) 
    initMenuPosition() {
      this.menuPosition = this.scrollService.getScrollPosition()<20 && !this.isMobile() ?'up':'down';
    }

  @HostListener('window:resize', ['$event'])
    onResize() {
      if(this.isMobile()){
        this.menuPosition = 'down';
      } else {
        this.initMenuPosition.call(this);
        this.setMobileMenuStatus(false);
      }
    }
}
