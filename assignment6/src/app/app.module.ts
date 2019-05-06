import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventlistingsComponent } from './eventlistings/eventlistings.component';

import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: '', redirectTo: '/eventlistings', pathMatch: 'full'},
  { path: 'eventlistings', component: EventlistingsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    EventlistingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      routes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
