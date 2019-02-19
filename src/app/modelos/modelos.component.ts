import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {

  listModelos;
  openMenu;
  menu;
  constructor(
    private dashboardService : UsuarioService
  ) { 
    this.menu = false;
    this.openMenu = false;
  }
var;
  ngOnInit() {
    this.dashboardService.returnListModelos()
    .snapshotChanges()
    .subscribe(data => {
      this.listModelos = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listModelos.push(x);
      });
      this.listAux = this.listModelos;
    });

  }
  listAux : any[];
  filtrar(value : string){
    this.listAux = [];
    this.listModelos.forEach(element => {
      if(element.sexo === value){
        this.listAux.push(element);
      }
    });
  }
}
