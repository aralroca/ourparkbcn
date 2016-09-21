import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-section',
  template: `<section class="appSection col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <ng-content></ng-content>
             </section>`,
  styles: [`
    .appSection{
      padding: 50px 10vw 50px 10vw;
      min-height: 400px;
      text-align: justify;
      z-index:-11;
      font-size: 18px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionComponent {}
