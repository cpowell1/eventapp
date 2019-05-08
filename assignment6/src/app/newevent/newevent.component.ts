import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-newevent',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css']
})
export class NeweventComponent implements OnInit {

  @Output() newEvent = new EventEmitter();

  event:any = {};
  fileToUpload: File = null;
  handleFileInput(files):void{
    this.fileToUpload = files.item(0);
  }

  constructor(private eventService:EventService) { }

  ngOnInit() {
  }

  save(neweventForm) : void {
     let formData = new FormData();
     formData.append('image', this.fileToUpload, this.fileToUpload.name);
     formData.append('title', this.event.title);
     formData.append('date', this.event.date);
     formData.append('time', this.event.time);

     this.eventService.createEvent(formData)
       .subscribe((event)=>{
         this.newEvent.emit();
         neweventForm.reset();
         this.fileInputField.value="";
       });
    }

}
