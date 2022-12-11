import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  public subjectData = new ReplaySubject(1);
  constructor() { }

  sendMessageWithData(mesageData:any){
    this.subjectData.next(mesageData);
  }

  getMessageWithData(){
      return this.subjectData.asObservable();
  }

}
