import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  mensajes : any[];
  mensaje : string;

  constructor(
    private UsuarioService : UsuarioService,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
  const key = this.activatedRoute.snapshot.paramMap.get("key");
  this.UsuarioService.soporteListMensajes(key)
  .snapshotChanges()
  .subscribe(data => {
    this.mensajes = [];
    data.forEach(element => {
      let x = element.payload.toJSON();
      x["$key"] = element.key
      this.mensajes.push(x);
    });
  }); 
  }

  enviar(){
    this.UsuarioService.inserNewSoporte(this.mensaje);
    this.mensaje = "";
  }
}
