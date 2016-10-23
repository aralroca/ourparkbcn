import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-instalations',
  templateUrl: './instalations.component.html',
  styleUrls: ['./instalations.component.css']
})
export class InstalationsComponent implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
  }

  setScrollTo250(){
    this.scrollService.setScrollTop(250);
  }

}
