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
    this.userService.notificationList()
    .snapshotChanges()
    .subscribe(data => {
      this.listNotificaciones = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listNotificaciones.push(x);
      });
    });
  } 

  newNotification(){
    this.userService.updateNotificacion(this.Notificacion);
  }
  deleteNotificacion(key){
    this.userService.removeNotificacion(key);
  }
}
