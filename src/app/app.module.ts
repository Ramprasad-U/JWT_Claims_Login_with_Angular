import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login.component';
import { SecurityService } from './security/security.service';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RespMsgComponent } from './ResponseMessage/resp-msg.component';
import { ResponseMessageService } from './ResponseMessage/response-message.service';
import { AuthGuard } from './security/auth.guard';
import { HasClaimDirective } from './security/has-claim.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RespMsgComponent,
    HasClaimDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [SecurityService, ResponseMessageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
