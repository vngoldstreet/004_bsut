import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomepageComponent } from './homepage/homepage.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import { CMedicalappointmentComponent } from './c-medicalappointment/c-medicalappointment.component';
import { CSliderComponent } from './c-slider/c-slider.component';
import { CHeaderComponent } from './c-header/c-header.component';
import { HotnewsComponent } from './hotnews/hotnews.component';
import { PopularnewsComponent } from './popularnews/popularnews.component';
import { CFooterComponent } from './c-footer/c-footer.component';
import { CDetailComponent } from './c-detail/c-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutusComponent } from './aboutus/aboutus.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CMedicalappointmentComponent,
    CSliderComponent,
    CHeaderComponent,
    HotnewsComponent,
    PopularnewsComponent,
    CFooterComponent,
    CDetailComponent,
    AboutusComponent,
    KnowledgeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatTabsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
