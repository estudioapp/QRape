import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  listadoClientes: AngularFireList<any>;
  formData: User;
  constructor(
    public firebase:AngularFireDatabase,
    private location: Router
  ){}

  ngOnInit() {

  }
  /**
   * Devuelve el listado de los clientes.
   */
  getClientes(){
    return this.listadoClientes = this.firebase.list("/Clientes");
  }

  addClientes(nombre: string, email: string): void {
    this.listadoClientes = this.firebase.list("/Clientes");
    this.listadoClientes.push({ nombre: nombre, email: email });
  }



}
