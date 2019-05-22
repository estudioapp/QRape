import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isScan : boolean;

  constructor(
    private Router : Router
  ){
    this.isScan = false;
  }

  ngOnInit() : void {
    if(localStorage.getItem("user") === null){
      this.Router.navigateByUrl("/login");
    }

  }
}
