import { Component, OnInit } from '@angular/core';
import { GenerarQrService } from 'src/app/services/generar-qr.service';
import { ActivatedRoute } from '@angular/router';
import { QR } from 'src/app/interfaces/qr';

@Component({
  selector: 'app-visor-qr',
  templateUrl: './visor-qr.component.html',
  styleUrls: ['./visor-qr.component.css']
})
export class VisorQRComponent implements OnInit {

  listQR : QR[];
  QRselect : QR;
  key : string; 

  constructor(
    private QRService : GenerarQrService,
    private activatedRoute : ActivatedRoute
    )
  {
    this.listQR = [];
    this.QRselect = {
      NombreUsuario : null
    };
  }

  ngOnInit() {
    const key = this.activatedRoute.snapshot.paramMap.get("key");
    this.key = key;
    this.QRService.getQRs()
    .snapshotChanges()
    .subscribe(Data => {
      this.listQR = Data.map(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        if(x["$key"] === key){
          this.QRselect = x as QR;
        }
        return x as QR;
      });
    });
  }

}
