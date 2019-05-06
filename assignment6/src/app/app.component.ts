import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService]
})
export class AppComponent {

  constructor(private eventService:EventService) {
  }

  eventList = null;

  title = 'Nashville Social Setting';

  getNumberOfEvents(){
    return this.eventList.length
  }

  totalAttendance:number = 0;
  handleAttendance(e):void {
    this.totalAttendance += 1;
  }

  ngOnInit(){
     this.eventList = this.eventService.listEvents();

  }

}
