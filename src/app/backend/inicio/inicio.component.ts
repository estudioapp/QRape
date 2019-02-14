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
  VentasMensuales : Number;
  DineroTotal : Number;

  constructor(
    private UsuarioService : UsuarioService
  ) { }

  ngOnInit() {
    this.VentasMensuales = 0;
    this.DineroTotal = 0;
    this.ClientesMensuales = 0;
    this.CantidadDeClientes = 0;
    let contador = 0;
    let arrayFecha;

    let f = new Date();
    let mesActual = f.getMonth();
    let anoActual = f.getFullYear();

    let listPedidoAux = [];
  }

}
