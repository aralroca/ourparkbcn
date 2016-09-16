import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
