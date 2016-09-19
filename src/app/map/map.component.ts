import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
declare const L:any;

@Component({
  selector: 'app-map',
  template: `<div [id]="mapId" [class]="mapId"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
  .leaflet-container{
      width:100%;
      height:300px;
    }`
  ]
})
export class MapComponent implements OnInit {

  @Input('zoom') zoom: number;
  @Input('mapId') mapId: string;
  @Input('lat') lat: number;
  @Input('lng') lng: number;
  private mapTimeout: any;
  private map: any;

  constructor() { 
  }

  ngOnInit() {
     this.mapTimeout = setTimeout(() => {
      this.map = new L.Map(this.mapId, {
        zoomControl: false,
        center: new L.LatLng(this.lat, this.lng),
        zoom: this.zoom,
        minZoom: 4,
        maxZoom: 19,
        layers: [new L.TileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
          maxZoom: 20
        })]
      });
      L.marker([this.lat, this.lng],{icon:L.icon({iconUrl:'./assets/marker-icon.png'})}).addTo(this.map);
    }, 200);
  }

}
