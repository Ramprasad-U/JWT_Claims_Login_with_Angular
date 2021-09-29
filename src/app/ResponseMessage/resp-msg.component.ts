import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { observable } from 'rxjs';

import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../security/security.service';
import { ResponseMessageService } from './response-message.service';

@Component({
  selector: 'app-resp-msg',
  templateUrl: './resp-msg.component.html',
  styleUrls: ['./resp-msg.component.css']
})
export class RespMsgComponent implements OnInit {

  securityObject: AppUserAuth;
  RspMsgdata: string = "";
  constructor(private responsemessageservice: ResponseMessageService,private route: ActivatedRoute, private  securityService: SecurityService) {
    this.securityObject = securityService.securityObject;
   }

  


  ngOnInit() {

    this.getRespMsg();
  }
  
  private getRespMsg(): void{
    this.responsemessageservice.getmessage().subscribe(msgdata=> this.RspMsgdata = msgdata as string);
  }

}
