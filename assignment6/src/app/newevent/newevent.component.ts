import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-newphoto',
  templateUrl: './newevent.component.html',
  styleUrls: ['./newevent.component.css']
})
export class NeweventComponent implements OnInit {
  // When a new event is created, we'll send an event to the parent
  //  to refresh its eventList
  @Output() newEvent = new EventEmitter();

  // photo object, bound to the form fields
  event:any = {}
  // property for the file upload element (not bound, but set in a change event)
  fileToUpload: File = null;

  constructor(private eventService:EventService) { }

  // will be used to clear this field later
  fileInputField = null;

  // bound to change event on file upload html control
  handleFileInput(target):void{
    this.fileToUpload = target.files.item(0);
    this.fileInputField = target;
  }

  ngOnInit(){ }

  // called onSubmit
  save(neweventForm) : void {
    // since we have  file upload, we'll use FormData here rather than JSON
    let formData = new FormData();
    formData.append('image', this.fileToUpload, this.fileToUpload.name);
    formData.append('title', this.event.title);
    formData.append('date', this.event.date);
    formData.append('time', this.event.date);
    console.log("submitting");

    this.eventService.createEvent(formData)
      .subscribe((event)=>{
        console.log(event)
        this.newEvent.emit();
        neweventForm.reset();
        this.fileInputField.value="";
      });
  }
}
