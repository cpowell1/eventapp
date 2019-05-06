import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  eventList = [
   {
     _id: 1,
     title:'St. Patricks Day',
     date:'March 17th, 2019',
     time: '7pm',
     imageurl:'http://157.230.217.229:8080/images/1555377263672-nashville.jpg'
   },
   {
     _id: 2,
     title:'St. Jude Rock and Roll Marathon',
     date:'May 5th, 2019',
     time: '8am',
     imageurl:'http://157.230.217.229:8080/images/1555392174007-Screen%20Shot%202019-04-16%20at%2012.22.45%20AM.png'
   },
   {
     _id: 3,
     title:'St. Jude Rock and Roll Marathon 2',
     date:'May 5th, 2019',
     time: '8am',
     imageurl:'http://157.230.217.229:8080/images/1555392174007-Screen%20Shot%202019-04-16%20at%2012.22.45%20AM.png'
   }
 ]

  constructor() { }
  listEvents(){
  return this.eventList;
  }

  getPhoto(id){
  return this.eventList.find((el) => {return el._id == id});
  }
}
