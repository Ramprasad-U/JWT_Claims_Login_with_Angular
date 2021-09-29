import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseMessageService {

  repmesg:string = "welcome this message";

  constructor() { }
  getmessage():Observable<string>{
    return of<string>(this.repmesg);
  }
}
