import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { GenerarQrService } from 'src/app/services/generar-qr.service';
import { QR } from 'src/app/interfaces/qr';

@Component({
  selector: 'app-nuevo-qr',
  templateUrl: './nuevo-qr.component.html',
  styleUrls: ['./nuevo-qr.component.css']
})
export class NuevoQRComponent implements OnInit {

  listClientes: any[];
  listQR: any[];

  ObjectQR: QR;
  cantidadQR: number;

  fotogramasQR: any[];

  constructor(
    private BackendService: BackendService,
    private QRService: GenerarQrService
  ) {
    this.fotogramasQR = [];
    this.cantidadQR = null;
    this.ObjectQR = {
      NombreUsuario: "",
      Serie: undefined
    };
    this.listQR = [];
    this.listClientes = [];
  }

  ngOnInit() {
    if(sessionStorage.getItem("usuario") === null){
      location.href="https://qready.com.ar";
    }
    this.BackendService.getClientes()
      .snapshotChanges()
      .subscribe(data => {
        this.listClientes = data.map(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          return x;
        });
      });

    this.QRService.getQRs()
      .snapshotChanges()
      .subscribe(data => {
        this.listQR = [];
        this.listQR = data.map(element => element.payload.toJSON());
        console.log(this.listQR);
      });
  }

  /** Filtrar todos los QR que pertenecen al cliente seleccionado. **/
  BuscarQr(value) {
    this.ObjectQR.NombreUsuario = value;
    if (this.listQR.length === 0) {
      this.ObjectQR.Serie = 1
    } else {
      var aux = 0;
      this.listQR.map(element => {
        if (element.NombreUsuario === value) {

          if (aux === 0) {
            aux = element.Serie;
          } else {
            if (aux < element.Serie) {
              aux = element.Serie;
            }
          }
        }
      });
      this.ObjectQR.Serie = aux + 1;
    }
  }

  AgregarQr() {
    if (this.ObjectQR.NombreUsuario !== "") {
      this.fotogramasQR = this.QRService.setNewQR(this.ObjectQR, this.cantidadQR);
    }
    this.cantidadQR = null;
    let x = <HTMLSelectElement>document.getElementById("select");
    x.selectedIndex = 0;
    this.ObjectQR = {
      NombreUsuario: "",
      Serie: undefined,
      FechaCreacion: new Date().toString()	
    }
  }


  Imprimir() {
    var contenido = document.getElementById("QR").innerHTML;
    var contenidoOriginal = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;
  }
}

