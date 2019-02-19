import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  listPacks;
  listAuxPacks;
  openMenu;
  categorias;
  constructor(
    private dashboardService: UsuarioService
  ) {
    this.openMenu = false;
  }
  filtrar(value: string) {
    this.listAuxPacks = [];
    let x = [];
    this.listPacks.forEach(element => {
      console.log("hola");
      Object.keys(element.tag).map(function (key) {
        if(element.tag[key] === value){
          console.log("entro")
          x.push(element);
        }
      })
    });
    this.listAuxPacks = x;
  }
  ngOnInit() {
    this.dashboardService.returnListPacks()
      .snapshotChanges()
      .subscribe(data => {
        this.listPacks = [];
        this.listAuxPacks = [];
        data.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.listPacks.push(x);
        });
        this.listAuxPacks = this.listPacks;
        this.categorias = []
        let x = [];
        this.listPacks.forEach(element => {
          Object.keys(element.tag).map(function (key) {
            console.log(element.tag[key]);
            x.push(element.tag[key]);
          });
        });
        this.categorias = x;
      });
    }

}
