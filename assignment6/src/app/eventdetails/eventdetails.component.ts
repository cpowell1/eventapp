import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css'],
  providers: [ EventService ]
})

export class EventdetailsComponent implements OnInit {

  event:any;
  eventdisplayurl = "";


  constructor(private route: ActivatedRoute,
              private router: Router,
              private eventService:EventService  ) { }

  ngOnInit() {
    this.getEvent();
  }

  getEvent():void{
     const param = this.route.snapshot.paramMap.get('id');
     this.eventService.getEvent(param)
     .subscribe:((event) => {
       this.event = event;
      this.eventdisplayurl = this.eventService.eventUrl + this.event.imageurl;
      });
    }
    updatePhoto(obj:any):void {
      this.event.title = obj.titleField;
      this.event.date = obj.descField;
      this.eventService.updateEvent(this.event._id, this.event)
       .subscribe((result)=>{
         location.reload();
       });
      }

      deleteEvent(){
      if (confirm(`Are you sure you want to delete ${this.event.title}?`)){
        console.log(`deleting ${this.event._id}`);
        this.eventService.deleteEvent(this.event._id)
          .subscribe((result)=>{
            alert(`${this.event.title} has been deleted`);
            this.router.navigate(['/#/']);
          })
        }
    }
}
