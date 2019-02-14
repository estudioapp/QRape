import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usuario : string;
  Contrasena : string;
  listUser : any[];
  hide;
  
  constructor(
    private userService : UsuarioService,
    private router : Router
  ){}

  ngOnInit() {
  }

  validateLogin(){
    this.listUser.forEach(element => {
      if(element.contrasena === this.Contrasena && element.usuario === this.Usuario){
        localStorage.setItem("bkcf",element.usuario);
        this.router.navigateByUrl("/backend/inicio")  
      }
    });
  }
}
