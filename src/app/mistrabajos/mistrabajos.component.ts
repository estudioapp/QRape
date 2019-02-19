import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mistrabajos',
  templateUrl: './mistrabajos.component.html',
  styleUrls: ['./mistrabajos.component.css']
})
export class MistrabajosComponent implements OnInit {

  urlToOpen;
  lightBox;
  constructor() {
    this.urlToOpen = "";
    this.lightBox = false;
   }

  ngOnInit() {
  }
  
  valorUrl(value){
    this.urlToOpen = value;
    this.lightBox = true;
  }
}
