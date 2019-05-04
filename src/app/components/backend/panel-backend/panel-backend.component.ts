import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-backend',
  templateUrl: './panel-backend.component.html',
  styleUrls: ['./panel-backend.component.css']
})
export class PanelBackendComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if(sessionStorage.getItem("usuario") === null){
      location.href="https://qready.com.ar";
    }
  }

}
