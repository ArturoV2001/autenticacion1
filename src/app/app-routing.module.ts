import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';
import {canActivate ,redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { LogoutComponent } from './logout/logout.component';
import { RegistroTelefonoComponent } from './registro-telefono/registro-telefono.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'users', component: UsersComponent },
  { path: 'logout', component: LogoutComponent}, 
  { path: 'signphone', component: RegistroTelefonoComponent}, 
  { path: '**', pathMatch: "full", redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
