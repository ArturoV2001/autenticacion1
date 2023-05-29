import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-telefono',
  templateUrl: './registro-telefono.component.html',
  styleUrls: ['./registro-telefono.component.css']
})
export class RegistroTelefonoComponent {
  telIngresado:boolean = false;
  error:boolean = false;
  exito:boolean = false;
  mostrarMsj:string = "";
  telefono:string = "";
  codigo:string= "";

  constructor(){

  }

  continuar():void{
    if(this.telefono.length >=10 ){
      this.telIngresado = true;
      this.limpiar();
      
    }else{
      this.mostrarMsj = "Ingresa un numero de mas de 10 digitos.";
      this.error = true;
    }
  }
  
  verificar():void{

  }

  limpiar(): void {
    this.exito = false;
    this.error = false;
    this.mostrarMsj = "";
  }
}
