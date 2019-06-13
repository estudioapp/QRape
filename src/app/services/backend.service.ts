import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  listadoUsuarios: AngularFireList<any>;

  constructor(
    private fireBase: AngularFireDatabase,
    private location: Router
  ){}

  /**
   * Devuelve el listado de los usuarios adm.
   */
  getUsuarios(){
    return this.listadoUsuarios = this.fireBase.list("Usuarios");
  }




  /**
   * Devuelve el listado de los clientes. USO DE PRUEBA <-> BORRAR
   */
  getClientes(){
    return  this.fireBase.list("Clientes");
  }


}
