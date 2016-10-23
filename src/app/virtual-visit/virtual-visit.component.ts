import { Component, OnInit, ElementRef } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { TimerObservable } from "rxjs/observable/TimerObservable";

interface IAframeEntity {
  id: string;
  position: string;
  rotation: string;
}
interface IVrDoor extends IAframeEntity {
  goto: string;
}
interface IVrText extends IAframeEntity {
  text: string;
  scale: string;
  opaAnim: string;
  posAnim: string;
}
interface IVrTextPlane extends IAframeEntity {
  position: string;
  rotation: string;
  target: string;
  width: number;
  height: number;
  isShown: boolean;
}
interface IVideo {
  id: string;
  url: string;
  track: string;
  doors: Array<IVrDoor>;
  texts: Array<IVrText>;
  textPlanes: Array<IVrTextPlane>;
}

@Component({
  selector: 'app-virtual-visit',
  templateUrl: './virtual-visit.component.html',
  styleUrls: ['./virtual-visit.component.css']
})
export class VirtualVisitComponent implements OnInit {
  elem: any;
  aframe: any;
  cuePointData: any = {};
  hideTitle: boolean = true;
  currentVideo: IVideo;
  timeout: any;
  vgApi: VgAPI;
  videos: Array<IVideo> = [
    {
      id: 'v0',
      url: '/assets/360videos/360_0044_Stitch_XHC.mp4',
      track: './assets/data/stage-1.vtt',
      doors: [
        { id: 'd1', position: '0 1 9', rotation: '180 0 0', goto: 'v1' },
        { id: 'd2', position: '6 1 9', rotation: '0 -130 0', goto: 'v3' }
      ],
      texts: [],
      textPlanes: []
    },
    {
      id: 'v1',
      url: '/assets/360videos/360_0045_Stitch_XHC.mp4',
      track: '/assets/data/stage-2.vtt',
      doors: [
        { id: 'd1', position: '-15 -3 -18', rotation: '0 -180 0', goto: 'v0' },
        { id: 'd2', position: '8 1 9', rotation: '0 -130 0', goto: 'v2' }
      ],
      texts: [
        {
          id: 't1',
          text: 'St. Maurici lake',
          position: '6 0 -4',
          rotation: '0 -30 0',
          scale: '2 2 2',
          opaAnim: 'startEvents: t1; property: opacity; dur: 300; from: 0; to: 1; elasticity: 1000',
          posAnim: 'startEvents: t1; property: position; dur: 500; from: 6 0 -4; to: 6 0.3 -4; elasticity: 1000'
        }
      ],
      textPlanes: [
        { id: 'p1', position: '17 0 -7', rotation: '-90 -30 0', width: 20, height: 20, target: 't1', isShown: false }
      ]
    },
    {
      id: 'v2',
      url: '/assets/360videos/360_0046_Stitch_XHC.mp4',
      track: '/assets/data/stage-3.vtt',
      doors: [
        { id: 'd1', position: '-1 1 -8', rotation: '0 -30 0', goto: 'v1' },
        { id: 'd2', position: '0 2 7', rotation: '0 180 0', goto: 'v3' }
      ],
      texts: [],
      textPlanes: []
    },
    {
      id: 'v3',
      url: '/assets/360videos/360_0047_Stitch_XHC.mp4',
      track: '/assets/data/stage-4.vtt',
      doors: [
        { id: 'd1', position: '-5 2 7', rotation: '0 130 0', goto: 'v2' },
        { id: 'd2', position: '3 4 7', rotation: '0 210 0', goto: 'v1' }
      ],
      texts: [],
      textPlanes: []
    }
  ];

  constructor(ref: ElementRef) {
    this.elem = ref.nativeElement;
    this.currentVideo = this.videos[0];
  }

  ngOnInit() {
    this.aframe = this.elem.querySelector('a-scene');
  }

  onAframeRenderStart() {
    const media = this.vgApi.getDefaultMedia();
    if (media.isMetadataLoaded) {
      this.displayDoors();
    }
  }

  onPlayerReady(api: VgAPI) {
    this.vgApi = api;
    const media = api.getDefaultMedia();
    if (media.isMetadataLoaded) {
      this.displayDoors();
    }
    media.subscriptions.loadedMetadata.subscribe(this.displayDoors.bind(this));
  }

  displayDoors() {
    Array.from(document.querySelectorAll('a-image'))
      .forEach(item => item.dispatchEvent(new CustomEvent('vgStartFadeInAnimation')));
  }

  onMouseEnterPlane(plane: IVrTextPlane) {
    if (!plane.isShown) {
      let target = document.querySelector('#' + plane.target);
      target.dispatchEvent(new CustomEvent(plane.target));
      plane.isShown = true;
    }
  }

  onMouseEnter($event: any, door: IVrDoor) {
    $event.target.dispatchEvent(new CustomEvent('vgStartAnimation'));

    this.timeout = TimerObservable.create(2000).subscribe(
      () => {
        this.currentVideo = this.videos.filter(v => v.id === door.goto)[0];
      }
    );
  }

  onMouseLeave($event: any) {
    $event.target.dispatchEvent(new CustomEvent('vgPauseAnimation'));

    // Send start and pause again to reset the scale and opacity
    $event.target.dispatchEvent(new CustomEvent('vgStartAnimation'));
    $event.target.dispatchEvent(new CustomEvent('vgPauseAnimation'));

    this.timeout.unsubscribe();
  }

  onEnterCuePoint($event: any) {
    this.hideTitle = false;
    this.cuePointData = JSON.parse($event.text);
  }

  onExitCuePoint($event: any) {
    this.hideTitle = true;

    // wait transition
    TimerObservable.create(500).subscribe(
      () => { this.cuePointData = {}; }
    );
  }

  ngOnDestroy() {
    if(this.timeout){
      this.timeout.unsubscribe();
    }
  }
}
