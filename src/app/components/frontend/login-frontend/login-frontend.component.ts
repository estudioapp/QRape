import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service"
@Component({
  selector: 'app-login-frontend',
  templateUrl: './login-frontend.component.html',
  styleUrls: ['./login-frontend.component.css']
})
export class LoginFrontendComponent implements OnInit {


  isRegistro: boolean;

  constructor(public authService: AuthService) {
    if(window.location.href.indexOf("/registro") !== -1){
      this.isRegistro = true;
    }else{
      this.isRegistro = false;
    }
  }

  ngOnInit() {
  }

}
