import { Injectable } from '@angular/core';
// FireBase
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 
  constructor( private fireBase: AngularFireDatabase ) { }

  listClient: AngularFireList<Cliente>;
  listUsuario: AngularFireList<any>;
  listNotificacion: AngularFireList<any>;
  listVentas: AngularFireList<any>;
  listSoporte: AngularFireList<any>;


  usuarioList(){
    return this.listUsuario = this.fireBase.list('usuario');
  }

  soporteList(){
    return this.listSoporte = this.fireBase.list('soporte', ref => ref.orderByChild('leido'));
  }

  soporteListMensajes(key){
    return this.listSoporte = this.fireBase.list('soporte/'+key+"/mensaje");
  }

  clientList(){
    return this.listClient = this.fireBase.list('cliente');
  }

  notificationList(){
    return this.listNotificacion = this.fireBase.list('notificacion');
  }

  pedidoList(){
    return this.listVentas = this.fireBase.list('pedido');
  }

  updateNotificacion(mensaje){
    this.listNotificacion.push({
      mensaje:mensaje
    });
  }
  removeNotificacion(key){
    this.listNotificacion.remove(key);
  }

  updateFecha(object : Cliente){
    this.listClient.update(object.$key, {
      hasta:object.hasta  
    });
  }

  inserNewSoporte(mensaje){
    this.listSoporte.push({
      mensaje: mensaje,
      quien: "chango"
    });
  }
}
