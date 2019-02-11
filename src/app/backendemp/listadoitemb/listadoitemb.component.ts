import { Component, OnInit } from '@angular/core';
import { Blogemp } from 'src/app/interfaces/blogemp';
import { EmprendedoresService } from 'src/app/emprendedores.service';

@Component({
  selector: 'app-listadoitemb',
  templateUrl: './listadoitemb.component.html',
  styleUrls: ['./listadoitemb.component.css']
})
export class ListadoitembComponent implements OnInit {

  constructor(
    private emprededores : EmprendedoresService
  ) { }

  listado : Blogemp[];
  ngOnInit() {
    this.emprededores.emprenderList()
    .snapshotChanges()
    .subscribe(data => {
      this.listado = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listado.push(x as Blogemp);
      });
    });
  }

  Borrar(key){
   this.emprededores.borrar(key); 
  }
}
