import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  listVentas : any[];

  constructor(
    private pedidoService : UsuarioService
  ) { }

  ngOnInit() {
    this.pedidoService.pedidoList()
    .snapshotChanges()
    .subscribe(data => {
      this.listVentas = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listVentas.push(x);
      });
    });
  }

}
