import { Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isScan : boolean;
  emailOnline;
  constructor(
    private Router : Router,
    private ClienteService : ClienteService
    ){
    this.isScan = false;
  }

  ngOnInit() : void {
    this.emailOnline = JSON.parse(localStorage.getItem("user"));
    if(this.emailOnline === null){
      this.Router.navigateByUrl("/login");
     
    }else{
      if(this.ClienteService.getGlobalCliente() === null){
        console.log("volver atras");
        this.Router.navigateByUrl("/intro");
      }
    }
  }

  mobile(){
    this.isScan = false;
    console.log("mobileScann");
  }
}
