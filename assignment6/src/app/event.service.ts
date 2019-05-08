import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class EventService {
  // track maxId value, will be incremented when we create()
  maxId = 3;
  private apiurl = environment.apiurl;
  eventUrl = environment.eventUrl;

  constructor(private http:HttpClient) { }

  // two basic read methods follow: list and "getOne"
  listEvents(){
    return this.http.get(this.apiurl + 'api/events');
  }

  getEvent(id){
    return this.http.get(this.apiurl + 'api/events/' + id);
  }

  // Other CRUD methods TBD`
  createEvent(photo: FormData){
    return this.http.post(this.apiurl+'api/events', photo);
  }

  updateEvent(id, data){
      return this.http.put(this.apiurl + 'api/events/' + id, data);
  }

  deleteEvent(id){
    return this.http.delete(this.apiurl + 'api/events/' + id);
  }

}
