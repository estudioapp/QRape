import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service"
import { ClienteService } from "../../../services/cliente.service"
import { User } from '../../../services/user.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-login-frontend',
  templateUrl: './login-frontend.component.html',
  styleUrls: ['./login-frontend.component.css']
})
export class LoginFrontendComponent implements OnInit {

  list: User[];
  isRegistro: boolean;


  constructor(public authService: AuthService, private clienteService: ClienteService, private firestore: AngularFirestore) {
    if (window.location.href.indexOf("/registro") !== -1) {
      this.isRegistro = true;
    } else {
      this.isRegistro = false;
    }
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.clienteService.formData = {
      uid: null,
      email: '',
      displayName: '',
      photoURL: '',
      emailVerified: false,
      password: ''
    }
  }

  registrarUsuario(form) {
    this.authService.SignUp(form).then(result => {
      if (result) {
        let cliente = JSON.parse(localStorage.getItem('registroCliente'));
        this.clienteService.addClientes(cliente.displayName, cliente.email);
        localStorage.removeItem('registroCliente');
        this.clienteService.getDataToUser();
      }
    })
      .catch(err => alert("error al registrarse >" + err));
  }
  loginAuth(user,pass){
    this.authService.SignIn(user,pass);
  }


}
