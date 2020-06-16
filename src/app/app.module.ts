import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotaComponent } from './quota/quota.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FamousComponent } from './famous/famous.component';

import { QuotaFormComponent } from './quota-form/quota-form.component';
import { QuotaDetailsComponent } from './quota-details/quota-details.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotaComponent,
    LandingComponent,
    HeaderComponent,
    FamousComponent,
    QuotaFormComponent,
    QuotaDetailsComponent,
    DateAgoPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
