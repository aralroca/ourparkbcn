import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-visit',
  templateUrl: './virtual-visit.component.html',
  styleUrls: ['./virtual-visit.component.css']
})
export class VirtualVisitComponent implements OnInit {

  public currentVideo: string = '/assets/360videos/360_0044_Stitch_XHC.mp4';

  constructor() { }

  ngOnInit() {
  }

  onAframeRenderStart(){
    console.log('onAframeRenderStart');
  }

}
