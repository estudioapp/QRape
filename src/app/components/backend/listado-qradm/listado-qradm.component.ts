import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { GenerarQrService } from 'src/app/services/generar-qr.service';
import { QR } from 'src/app/interfaces/qr';

@Component({
  selector: 'app-listado-qradm',
  templateUrl: './listado-qradm.component.html',
  styleUrls: ['./listado-qradm.component.css']
})
export class ListadoQRadmComponent implements OnInit {

  listClientes: any[];
  listQR: any[];
  listQRCliente : QR[];

  ObjectQR: QR;
  numeroSerie: number;
  constructor(
    private BackendService: BackendService,
    private QRService: GenerarQrService
  ) {
    this.numeroSerie = null;
    this.listClientes = [];
    this.listQR = [];
    this.listQRCliente = [];
    this.ObjectQR = {
      NombreUsuario: "",
      Serie: undefined
    };
  }

  ngOnInit() {
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
        this.listQR = data.map(element => {
          let x = element.payload.toJSON()
          x["$key"] = element.key;
          return x;
        });
      });
  }

  /** Filtrar todos los QR que pertenecen al cliente seleccionado. **/
  BuscarQr(value) {
    this.ObjectQR.NombreUsuario = value;
    let aux = 0;
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
    console.log(aux);
    this.ObjectQR.Serie = aux;
  }

  listado(){
    this.listQRCliente = [];
    this.listQR.map(element => {
      if(element.NombreUsuario === this.ObjectQR.NombreUsuario && element.Serie === this.numeroSerie){
        this.listQRCliente.push(element);
      }
    });
  }  


  Imprimir() {
    var contenido = document.getElementById("QR").innerHTML;
    var contenidoOriginal = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;
  }

}
