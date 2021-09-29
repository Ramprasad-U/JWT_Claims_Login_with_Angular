import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RespMsgComponent } from './ResponseMessage/resp-msg.component';
import { AuthGuard } from './security/auth.guard';
import { LoginComponent } from './security/login.component';

const routes: Routes = 
[
{path: 'login',component: LoginComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'RspMsg', component: RespMsgComponent,canActivate: [AuthGuard], data:{ claimName: "canAccessResponseMsg" }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
