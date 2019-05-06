import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-eventlistings',
  templateUrl: './eventlistings.component.html',
  styleUrls: ['./eventlistings.component.css'],
  providers: [EventService]
})
export class EventlistingsComponent implements OnInit {

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