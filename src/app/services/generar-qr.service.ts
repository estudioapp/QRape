import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import 'firebase/storage';

import { QR } from '../interfaces/qr';
import { Imgupload } from '../interfaces/imgupload';


@Injectable({
  providedIn: 'root'
})
export class GenerarQrService {


  listadoQR: AngularFireList<QR>;
  fotogramaQr: any[];

  private basePath = '/uploads';


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
        Serie: qr.Serie,
        FechaCreacion: new Date().toString()	
      }).key);
    }
    return this.fotogramaQr;
  }

  /**  **/
  setValueQR(fileUpload: Imgupload, ObjectQR: QR) {
    if (fileUpload === null || fileUpload === undefined) {
      if (ObjectQR.Archivo === undefined) {
        ObjectQR.Archivo = null;
      }
      if (ObjectQR.Foto === undefined) {
        ObjectQR.Foto = null;
      }
      if (ObjectQR.Texto === undefined) {
        ObjectQR.Texto = null;
      }
      if (ObjectQR.Video === undefined) {
        ObjectQR.Video = null;
      }
      let setDay;
      if (ObjectQR.FechaCreacion === undefined){
        setDay = new Date().toString();
      }else{
        setDay = ObjectQR.FechaCreacion;
      }
      if(ObjectQR.CantidadScan === undefined){
        ObjectQR.CantidadScan = 1;
      }
      this.listadoQR.update(ObjectQR.$key,
        {
          NombreUsuario: ObjectQR.NombreUsuario,
          Serie: ObjectQR.Serie,
          CantidadScan: ObjectQR.CantidadScan,
          Foto: ObjectQR.Foto,
          Archivo: ObjectQR.Archivo,
          Texto: ObjectQR.Texto,
          FechaCreacion: setDay,
          Video: ObjectQR.Video
        });
    } else {

      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.$key}`).put(fileUpload.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        },
        (error) => {
          // fail
          console.log(error);
        },
        () => {
          // success
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {

            ObjectQR.Foto = downloadURL;
            if (ObjectQR.Archivo === undefined) {
              ObjectQR.Archivo = null;
            }
            if (ObjectQR.Foto === undefined) {
              ObjectQR.Foto = null;
            }
            if (ObjectQR.Texto === undefined) {
              ObjectQR.Texto = null;
            }
            if(ObjectQR.CantidadScan === undefined){
              ObjectQR.CantidadScan = 1;
            }
            if (ObjectQR.Video === undefined) {
              ObjectQR.Video = null;
            }
            var setDay;
            if (ObjectQR.FechaCreacion === undefined){
              setDay = new Date().toString();
            }else{
              setDay = ObjectQR.FechaCreacion;
            }
            this.listadoQR.update(ObjectQR.$key,
              {
                NombreUsuario: ObjectQR.NombreUsuario,
                Serie: ObjectQR.Serie,
                Foto: ObjectQR.Foto,
                Archivo: ObjectQR.Archivo,
                Texto: ObjectQR.Texto,
                FechaCreacion:setDay,
                Video: ObjectQR.Video
              });
          
            });
            this.location.navigateByUrl("/panel");
        }
      );
    }
  }



  
}
