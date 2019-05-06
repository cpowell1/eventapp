import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css'],
  providers: [ EventService ]
})

export class EventdetailsComponent implements OnInit {

  event:any;
  eventdisplayurl:string='';


  constructor(private route: ActivatedRoute,
              private eventService:EventService  ) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent(): void{
     const param = this.route.snapshot.paramMap.get('id');
     this.eventService.getEvent(param)
      .subscribe((event) => {
        this.event = event;
        this.eventdisplayurl = this.eventService.eventUrl + this.event.imageurl;
      });
  }

}
