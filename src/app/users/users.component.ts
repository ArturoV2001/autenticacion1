import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  email:string;
  
  constructor(
   private userService:UserService
  ){
    this.email = userService.mostrar();
    if(this.email == "undefined"){
      this.email = "No se ha iniciado una sesion.";
    }
  }
  
}
