import { Component, OnInit } from '@angular/core';
import { GenerarQrService } from 'src/app/services/generar-qr.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  EmailOnline : string;

  constructor(
    private QRService : GenerarQrService,
    private activatedRoute : ActivatedRoute,
    private Router : Router
    )
  {
    this.listQR = [];
    this.QRselect = {
      NombreUsuario : null
    };
  }
  
  ngOnInit() {
    const key = this.activatedRoute.snapshot.paramMap.get("key");
    if(JSON.parse(localStorage.getItem("user")).email !== null){
      this.EmailOnline = JSON.parse(localStorage.getItem("user")).email;
    }  

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

  backToPanel(){
    this.Router.navigateByUrl("/panel");
  }
}



