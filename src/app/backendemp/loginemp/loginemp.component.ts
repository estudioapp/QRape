import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginemp',
  templateUrl: './loginemp.component.html',
  styleUrls: ['./loginemp.component.css']
})
export class LoginempComponent implements OnInit {

  login : string;

  constructor(
    private router : Router
  ) {
    this.login = "";
   }

  ngOnInit() {}

  loginCheck(){
    if(this.login === "qweiop"){
      localStorage.setItem("usuario","qweiop");
      this.router.navigateByUrl("/emprender/newitem")
    }
  }
}
