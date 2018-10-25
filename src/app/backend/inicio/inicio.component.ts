import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  CantidadDeClientes : Number;
  ClientesMensuales : Number;
  constructor(
    private UsuarioService : UsuarioService
  ) { }

  ngOnInit() {
    this.ClientesMensuales = 0;
    this.CantidadDeClientes = 0;
    let contador = 0;
    let arrayFecha;
    let f = new Date();
    let mesActual = f.getMonth();
    let anoActual = f.getFullYear();

    this.UsuarioService.clientList()
    .snapshotChanges()
    .subscribe(data => {

      let cantidad = []
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        cantidad.push(x);
        arrayFecha = x["creacion"].split("/");

        if(Number(arrayFecha[1]) === mesActual && Number(arrayFecha[2]) === anoActual){
          contador++
        }
      });
      this.ClientesMensuales = contador;
      this.CantidadDeClientes = cantidad.length;
    });
  }

}
