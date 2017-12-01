import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { VgCore } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CoverComponent } from './cover/cover.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { InstalationsComponent } from './instalations/instalations.component';
import { ClassesComponent } from './classes/classes.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { SectionComponent } from './section/section.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScrollService } from './scroll.service';
import { VirtualVisitComponent } from './virtual-visit/virtual-visit.component';

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
    ServicesComponent,
    FooterComponent,
    MapComponent,
    CalendarComponent, 
    PageNotFoundComponent,
    VirtualVisitComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    VgCore,
    VgControlsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [appRoutingProviders, ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
