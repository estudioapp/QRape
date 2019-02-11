import { Component, OnInit } from '@angular/core';
import { EmprendedoresService } from 'src/app/emprendedores.service';
import { Blogemp } from 'src/app/interfaces/blogemp';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(
    private emprendedores : EmprendedoresService
  ) { }

  list : Blogemp[]
  ngOnInit() {
    this.emprendedores.emprenderList()
    .snapshotChanges()
    .subscribe(data => {
      this.list = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.list.push(x);
      });
    });
  }

}
