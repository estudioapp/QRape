import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Menu: boolean;

  constructor() {

    this.Menu = false;
   
  }

  ngOnInit() {
    if(window.innerWidth > 769){
      this.Menu = true;
    }
  }

}
