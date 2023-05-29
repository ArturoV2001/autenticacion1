import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  exito: boolean = false;
  error: boolean = false;
  mostrarMsj: string = "";
  form: FormGroup;

  constructor(private userService: UserService, private router:Router) {
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
    userService.sesion(userService);
  }

  ingresar(): void {
    this.limpiar();
    console.log(this.form.value)
    this.userService.ingreso(this.form.value)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }

  limpiar(): void {
    this.exito = false;
    this.error = false;
    this.mostrarMsj = "";
  }

  ingresarGoogle():void{
    this.userService.ingresoGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/users'])
      })
      .catch(error => console.log(error));
  }
}
