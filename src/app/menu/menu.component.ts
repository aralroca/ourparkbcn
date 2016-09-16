import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {

  @Input() menuPosition:string;
  @Input() menuItems:any;
  @Input() isMobileMenuOpened:boolean;
  @Output() setMobileMenuStatus = new EventEmitter();

  constructor(private scrollService: ScrollService) { }

  setScroll(position = 0){
    this.scrollService.setScrollTop(position);
    this.setMobileMenuStatus.emit(false);
  }
}
