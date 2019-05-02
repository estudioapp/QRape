import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-back',
  templateUrl: './login-back.component.html',
  styleUrls: ['./login-back.component.css']
})
export class LoginBackComponent implements OnInit {

  usuario : string;
  contrasena : string;
  listUser: any[]

  constructor(
    private BackendService: BackendService,
    private Router: Router
  ) {
    this.listUser = [];
  }


  ngOnInit() {
    if(sessionStorage.getItem("usuario") !== null){
      sessionStorage.removeItem("usuario");
    };
    
    this.BackendService.getUsuarios()
      .snapshotChanges()
      .subscribe(data => {
        this.listUser = [];
        this.listUser = data.map(element => {
          let x = element.payload.toJSON()
          x["$key"] = element.key;
          return x;
        });
      });
  }

  login() : void{
    this.listUser.map(element => {
      if(element.usuario === this.usuario && element.contrasena === this.contrasena){
        sessionStorage.setItem("usuario",this.usuario);
        this.Router.navigateByUrl("admin8291/nuevosQR");
      }
    });
  }

}
