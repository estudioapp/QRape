import { Component, OnInit } from '@angular/core';
import { Blogemp } from '../interfaces/blogemp';
import { EmprendedoresService } from '../emprendedores.service';

@Component({
  selector: 'app-emprendedores',
  templateUrl: './emprendedores.component.html',
  styleUrls: ['./emprendedores.component.css']
})
export class EmprendedoresComponent implements OnInit {

  constructor(private emprendedores: EmprendedoresService) { }

  listBlog: Blogemp[];
  categoriaitem: Blogemp[];
  listAll: Blogemp[];
  listNegocio: Blogemp[];
  ngOnInit() {
    this.emprendedores.emprenderList()
      .snapshotChanges()
      .subscribe(data => {
        this.listNegocio = [];
        this.listAll = [];
        this.categoriaitem = [];
        this.listBlog = [];
        data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listBlog.push(x as Blogemp);
        if(x["categoria"] === 'Destacada'){
          this.categoriaitem.push(x as Blogemp);
        }
        if(x["categoria"] === 'Ideas de negocio'){
          this.listNegocio.push(x);
        }
      });
    })
  }

}
