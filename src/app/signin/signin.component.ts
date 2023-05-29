import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  exito: boolean = false;
  error: boolean = false;
  mostrarMsj: string = "";
  form: FormGroup;

  constructor(private userService: UserService, private router:Router) {

    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  registrar(): void {
    this.limpiar();
    console.log(this.form.value)
    this.userService.registro(this.form.value)
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

  registrarGoogle():void{
    this.userService.ingresoGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/users'])
      })
      .catch(error => console.log(error));
  }
}
