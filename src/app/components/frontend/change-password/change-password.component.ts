import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  isError : boolean;
  inputValuePassword : string;
  inputValuePasswordActualy : string;
  inputValueEmaildActualy : string;

  constructor(
    private Auth : AuthService
  )
  {
    this.isError = false;
    this.inputValuePassword = "";
    this.inputValuePasswordActualy = "";
    this.inputValueEmaildActualy = "";
  }


  ngOnInit() {
  }

  updateUserPassword() {
    this.Auth.SignIn(this.inputValueEmaildActualy,this.inputValuePasswordActualy)
    .then(data => {
      this.Auth.changePassword(this.inputValuePassword).then( data => { this.isError = false;}).catch(data => {
        this.isError = true;
        console.log(data);
      });
    })
    .catch(data => { console.log(data) });
  }
}
