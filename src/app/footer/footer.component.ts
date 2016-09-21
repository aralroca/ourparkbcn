import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
             <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4">
             Ourpark © {{currentYear}}
             </div>
             <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 text-lg-center text-md-center text-sm-center text-xs-center">

             </div>
             <div class="col-md-4 col-lg-4 col-sm-4 col-xs-4 text-lg-right text-md-right text-sm-right text-xs-right">
              <small>Webside built by <a href="http://www.twitter.com/aralroca" title="Aral Roca Gòmez, Barcelona" target="_blank">Aral Roca Gomez</a></small>
             </div>
             <div></div>
            </footer>`,
  styles: [`
  footer{
      padding: 40px;
      background-color: #212121;
      min-height: 100px;
      z-index: -10;
      color: #fafafa;
    }
  `]
})
export class FooterComponent {
  public currentYear:number = (new Date()).getFullYear();
}
