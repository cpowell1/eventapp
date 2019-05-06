import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventlistingsComponent } from './eventlistings/eventlistings.component';

import { RouterModule, Routes } from '@angular/router';
import { EventdetailsComponent } from './eventdetails/eventdetails.component';

const routes:Routes = [
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'eventlistings', component: EventlistingsComponent },
  { path: 'event/:id', component: EventdetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventlistingsComponent,
    EventdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
