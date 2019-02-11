import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemalbum',
  templateUrl: './itemalbum.component.html',
  styleUrls: ['./itemalbum.component.css']
})
export class ItemalbumComponent implements OnInit {

  constructor() { }

  url;
  ngOnInit() {
    this.url = "url('/assets/251.jpg')";
  }

}
