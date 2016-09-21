import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CoverComponent } from './cover/cover.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InstalationsComponent } from './instalations/instalations.component';
import { ClassesComponent } from './classes/classes.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { SectionComponent } from './section/section.component';
import { TariffComponent } from './tariff/tariff.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScrollService } from './scroll.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoverComponent,
    AboutUsComponent,
    InstalationsComponent,
    ClassesComponent,
    EventsComponent,
    SectionComponent,
    ContactComponent,
    TariffComponent,
    FooterComponent,
    MapComponent,
    CalendarComponent, 
    PageNotFoundComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders, ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
