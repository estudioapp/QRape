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
  constructor(
    private userService : UsuarioService,
    private router : Router
  ){}

  ngOnInit() {
    this.userService.usuarioList()
    .snapshotChanges()
    .subscribe(data => {
      this.listUser = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listUser.push(x);
      });
    });
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
