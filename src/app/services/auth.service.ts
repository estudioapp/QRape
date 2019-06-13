import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user.model";
//import { auth } from 'firebase/app';
//import firebase from 'firebase/app';
import { ClienteService } from "../services/cliente.service"
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public clienteService: ClienteService,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {

    /* Saving user data in localstorage when
  logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        this.clienteService.getDataToUser();

        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
  // Sign in with email/password
  SignIn(email, password) {
    if(email == "" || email == undefined || password == "" || password == undefined )
      return;

    this.afAuth.auth.languageCode = 'es';
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        
        console.log(this.SetUserData(result.user));
        if (!this.userData.emailVerified) {
          alert("Tu cuenta aún no está activa, es decir todavía no verificaste tu correo electrónico haciendo click en el email que te envíamos durante el proceso de registro");
        } else {
          this.ngZone.run(() => {
            this.router.navigate(['panel']);
          });
        }
      }).catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            alert("La contraseña no es válida o el usuario no tiene una contraseña");
            break;
          case "auth/user-not-found":
            alert("No hay un registro de usuario correspondiente a este identificador. Es posible que el usuario haya sido eliminado");
            break;
            case "auth/invalid-email":
              alert("Email con formato incorrecto. Por favor volver a ingresar el email.");
              break;
          default:  // Tenemos un error constante de EmailVerifed, hasta no solucionarlo, seguimos usando la siguiente linea de codigo.
            if(error.code  === "Cannot read property 'emailVerified' of undefined"){this.SignIn(email,password)}else{window.alert(error.message);};
        }
        //window.alert(error.message)
      })

  }
  // const asyncExample = async () => {
  //   return await axios(users)
  // };
  // Sign up with email/passwordResetEmaild
    async SignUp(form) {
    localStorage.setItem('registroCliente', JSON.stringify(form.value));
    this.afAuth.auth.languageCode = 'es';
    return await this.afAuth.auth.createUserWithEmailAndPassword(form.value.email,form.value.pass)
      .then((result) => {
        /* Call the SendVerificaitonMail() function when new user sign
        up and returns promise */
        this.SendVerificationMail();
        this.SetUserData(result.user);
        return true;
      }).catch((error) => {
        window.alert(error.message);
        return false;
      });

  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
  }
  // Reset Forggot password
  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }
  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
  // Sign in with Google
  //GoogleAuth() {
  //return this.AuthLogin(new auth.GoogleAuthProvider());
  //}
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
  }
  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      password: ""
    }
    return userRef.set(userData, {
      merge: true
    })
  }
  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
}
