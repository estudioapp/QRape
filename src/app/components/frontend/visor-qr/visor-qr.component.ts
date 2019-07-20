import { Component, OnInit, NgZone } from '@angular/core';
import { GenerarQrService } from 'src/app/services/generar-qr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QR } from 'src/app/interfaces/qr';
import { User } from 'src/app/services/user.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-visor-qr',
  templateUrl: './visor-qr.component.html',
  styleUrls: ['./visor-qr.component.css']
})
export class VisorQRComponent implements OnInit {

  listQR: QR[];
  QRselect: QR;
  key: string;
  EmailOnline: string;
  list: User[];
  permiso: string;
  caducado: boolean;

  constructor(
    private QRService: GenerarQrService,
    private activatedRoute: ActivatedRoute,
    private Router: Router,
    private ClienteService: ClienteService,
    private zone: NgZone
  ) {
    this.listQR = [];
    this.QRselect = {
      NombreUsuario: null
    };
  }

  ngOnInit() {
    const key = this.activatedRoute.snapshot.paramMap.get("key");
    const user = JSON.parse(localStorage.getItem('user'));
    if (JSON.parse(localStorage.getItem("user")).email !== null) {
      this.EmailOnline = JSON.parse(localStorage.getItem("user")).email;
    }
    this.ClienteService.getListUsers().subscribe(actionArray => {
      this.permiso = "";
      actionArray.map(element => {
 	
        let x = element.payload.doc.data();
        if (x["uid"] === user.uid) {
          if(x["tipoUsuario"] === undefined){
            x["tipoUsuario"] = "free";
          }
          this.permiso = x["tipoUsuario"];
        }
      });
	
    });

    this.key = key;
    this.QRService.getQRs()
      .snapshotChanges()
      .subscribe(Data => {
        this.listQR = Data.map(element => {
          
          let x = element.payload.toJSON();
          let FechaCreacion = new Date(x["FechaCreacion"]);
          let FechaHoy = new Date();

          

          x["$key"] = element.key;
          if (x["$key"] === key) {
            x["CantidadScan"]++;
            console.log(x)
            console.log(this.QRService.setValueQR(null,x as QR));
            this.QRselect = x as QR;
            if (FechaHoy > sumarDias(FechaCreacion, 90)){
              this.caducado = true;
            }
          }
          return x as QR;
        });
      });
    /* Función que suma o resta días a una fecha, si el parámetro	
      días es negativo restará los días*/
    function sumarDias(fecha, dias) {
      fecha.setDate(fecha.getDate() + dias);
      return fecha;
    }
  }


  backToPanel() {
    this.Router.navigateByUrl("/panel");
  }
}



