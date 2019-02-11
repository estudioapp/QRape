import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmprendedoresService } from 'src/app/emprendedores.service';
import { Blogemp } from 'src/app/interfaces/blogemp';

@Component({
  selector: 'app-itemlistado',
  templateUrl: './itemlistado.component.html',
  styleUrls: ['./itemlistado.component.css']
})
export class ItemlistadoComponent implements OnInit {

  constructor(
    private ActivatedRoute : ActivatedRoute,
    private Emprendededores : EmprendedoresService
  ) { }
  item : Blogemp;
  ngOnInit() {
    this.Emprendededores.emprenderList()
    .snapshotChanges()
    .subscribe(data => {
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        if(this.ActivatedRoute.snapshot.paramMap.get("item")){
          this.item = x;
        }
      });
    })
    
  }

}
