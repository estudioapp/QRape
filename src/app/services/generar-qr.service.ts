import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { QR } from '../interfaces/qr';


@Injectable({
  providedIn: 'root'
})
export class GenerarQrService {

  listadoQR: AngularFireList<QR>;
  fotogramaQr: any[];
  constructor(
    private fireBase: AngularFireDatabase,
    private location: Router
  ) {
    this.fotogramaQr = [];
  }

  /**
   * Devuelve el listado de todos los QR.
   */
  getQRs() {
    return this.listadoQR = this.fireBase.list("QR");
  }

  setNewQR(qr: QR, cantidad: number): any {
    this.fotogramaQr = [];
    for (let i = 0; i < cantidad; i++) {
      this.fotogramaQr.push(this.listadoQR.push({
        NombreUsuario: qr.NombreUsuario,
        Serie: qr.Serie
      }).key);
    }
    return this.fotogramaQr;
  
  }


}
