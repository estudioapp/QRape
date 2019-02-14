import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  Notificacion : string;
  listNotificaciones : any[];
  constructor(
    private userService : UsuarioService
  ) { }

  ngOnInit() {
  } 

  newNotification(){
  }
  deleteNotificacion(key){
  }
}
