import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  
  modelo;
  pack : any[];
  menu;
  fotos : string[];
  url;
  tags;
  x;
  constructor(
    private activatedRoute : ActivatedRoute,
    private DashboardService : UsuarioService
  ) {
    
    this.x = false;
    this.menu = false;
  }

  ngOnInit() {
    const modelo = this.activatedRoute.snapshot.paramMap.get("nombredemodelo")
    this.DashboardService.returnListModelos()
    .snapshotChanges()
    .subscribe(data => {
      this.pack = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        
        if(x["nombre"] === modelo){
          this.modelo = x;
        }
      });
    });

    this.DashboardService.returnListPacks()
    .snapshotChanges()
    .subscribe(Data => {
      this.pack = [];
      Data.forEach(element => {
        let x = element.payload.toJSON();
        if(x["modelo"] === modelo ){
          this.pack.push(x);
        }      
      });
      this.url = "url("+this.pack[0].portada+")";
    })
  }
}
