import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.css']
})
export class DocumentacionComponent implements OnInit {

  itemOne: boolean;
  itemTwo: boolean;
  itemThree: boolean;
  itemFour: boolean;


  constructor(

  ) {
    this.itemOne = false;
    this.itemTwo = false;
    this.itemThree = false;
    this.itemFour = false;

  }


  ngOnInit() {
  }

}
