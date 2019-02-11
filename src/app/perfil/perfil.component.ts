import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  url;

  constructor() { }

  ngOnInit() {
    this.url = "url('/assets/251.jpg')";
  }

}
