import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soporte',
  templateUrl: './soporte.component.html',
  styleUrls: ['./soporte.component.css']
})
export class SoporteComponent implements OnInit {

  listClientes : any[];

  constructor(
    private UsuarioService : UsuarioService,
    private router : Router
  ) { }

  ngOnInit() {
  }
  contestarMensaje(object){
    this.router.navigateByUrl("/backend/soporte/mensajes/"+object.$key);
  }
}
