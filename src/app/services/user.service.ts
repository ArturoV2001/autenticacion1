import { Injectable } from '@angular/core';
import {
  Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, signInWithPopup, GoogleAuthProvider
} from '@angular/fire/auth';
import { onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private router: Router) { }

  mostrar(): string {
    return String(this.auth.currentUser?.email);

  }
  registro({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }


  ingreso({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  ingresoGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  ingresoTelefono() {
    
  }
  cerrar() {
    return signOut(this.auth);
  }

  sesion(user: UserService) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.router.navigate(['/logout']);
      } else {

      }
    })
  }
}
