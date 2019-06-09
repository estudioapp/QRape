import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { User } from './user.model';
import { Cliente } from '../interfaces/usuario.model';
import { QR } from '../interfaces/qr';
import { GenerarQrService } from './generar-qr.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  listadoClientes: AngularFireList<Cliente>;
  formData: User;
  Cliente: Cliente;
  QRListClientOnlien: QR[];

  constructor(
    private QrService: GenerarQrService,
    public firebase: AngularFireDatabase,
    private location: Router
  ) {
    this.Cliente = null;
    this.QRListClientOnlien = null;
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
    this.listadoClientes.push({ Nombre: nombre, Email: email, Estado: "Normal" });
    /** 
    * Este metodo agrega 10 QR al cliente que se está registrando. Para la versión PlayStore.
    * var cantidadQR = 10;
    * for (let i = 0; i < cantidadQR; i++) {
    *   this.firebase.list("/QR").push({
    *     NombreUsuario: email,
    *     Serie: 1
    *   });
    **/
  }

  getListOfQrClients() {
    return this.QRListClientOnlien;
  }

  setListOfQrClientes(listQr: QR[]) {
    this.QRListClientOnlien = listQr;
  }




  getDataToUser() {
    if (JSON.parse(localStorage.getItem("user")) !== null) {
      if (this.getListOfQrClients() === null) {
        var listQr: QR[];
        var cliente: Cliente;
        this.QrService.getQRs()
          .snapshotChanges()
          .subscribe(data => {
            listQr = []
            data.map(element => {
              let x = element.payload.toJSON();
              x["$key"] = element.key;

              if (x["NombreUsuario"] === JSON.parse(localStorage.getItem("user")).email) {
                listQr.push(x as QR);
              }
            });
            this.setListOfQrClientes(listQr);
          });
      }
      if (this.getGlobalCliente() === null) {
        console.log("BUSCANDO CLIENTE")
        this.getClientes()
          .snapshotChanges()
          .subscribe(data => {
            data.map(element => {
              let y = element.payload.toJSON();
              y["$key"] = element.key;
              if (JSON.parse(localStorage.getItem("user")).email === y["Email"]) {
                this.setGlobalCliente(y as Cliente)
              }
            });
          });
      }
    }
  }


}
