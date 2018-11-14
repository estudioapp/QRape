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
    this.UsuarioService.soporteList()
    .snapshotChanges()
    .subscribe(data => {
      this.listClientes = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listClientes.push(x);
      });
    });
  }
  contestarMensaje(object){
    this.router.navigateByUrl("/backend/soporte/mensajes/"+object.$key);
  }
}
