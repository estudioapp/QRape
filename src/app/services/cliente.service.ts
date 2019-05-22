import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from './user.model';
import { Cliente } from '../interfaces/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  listadoClientes: AngularFireList<Cliente>;
  formData: User;
  Cliente: Cliente;

  constructor(
    public firebase: AngularFireDatabase,
    private location: Router
  ) {
    this.Cliente = null;
  }

  ngOnInit() {

  }

  getGlobalCliente() {
    return this.Cliente;
  }

  setGlobalCliente(value: Cliente) {
    this.Cliente = value;
  }

  /**
   * Devuelve el listado de los clientes.
   */
  getClientes() {
    return this.listadoClientes = this.firebase.list("/Clientes");
  }

  addClientes(nombre: string, email: string): void {
    this.listadoClientes = this.firebase.list("/Clientes");
    this.listadoClientes.push({ Nombre: nombre, Email: email, Estado:"Normal" });
    /** 
    * Este metodo agrega 10 QR al cliente que se está registrando.
    * var cantidadQR = 10;
    * for (let i = 0; i < cantidadQR; i++) {
    *   this.firebase.list("/QR").push({
    *     NombreUsuario: email,
    *     Serie: 1
    *   });
    **/

  }



}
