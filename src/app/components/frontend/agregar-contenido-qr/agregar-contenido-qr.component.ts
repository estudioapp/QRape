import { Component, OnInit } from '@angular/core';
import { QR } from 'src/app/interfaces/qr';
import { GenerarQrService } from 'src/app/services/generar-qr.service';
import { ActivatedRoute } from '@angular/router';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { Imgupload } from 'src/app/interfaces/imgupload';

@Component({
  selector: 'app-agregar-contenido-qr',
  templateUrl: './agregar-contenido-qr.component.html',
  styleUrls: ['./agregar-contenido-qr.component.css']
})
export class AgregarContenidoQRComponent implements OnInit {


  listQR : QR[];
  QRselect : QR;
  key : string; 
  imagen : any[];
  ErrorImg : boolean;
  isFoto: boolean;
  isProblema : boolean;
  currentFileUpload: Imgupload;

  constructor(
    private ng2ImgMax: Ng2ImgMaxService,    
    private QRService : GenerarQrService,
    private activatedRoute : ActivatedRoute
    )
  {
    this.isProblema = false;
    this.isFoto = false;
    this.ErrorImg = false;
    this.listQR = [];
    this.QRselect = {
      NombreUsuario : null,
      Texto : ""
    };

  }

  ngOnInit() {
    this.QRselect.Texto = "";
    this.imagen = [];
    const key = this.activatedRoute.snapshot.paramMap.get("key");
    this.key = key;
    this.QRService.getQRs()
    .snapshotChanges()
    .subscribe(Data => {
      this.listQR = Data.map(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        if(x["$key"] === key){
          if(x["Texto"] === undefined){
            x["Texto"] = null;
          }
          this.QRselect = x as QR;
        }
        return x as QR;
      });
    });
  }

  subiendo: boolean = false;
  seleccionarFoto(event) {
    this.subiendo = true;
    let image = event.target.files[0];
    this.ng2ImgMax.resizeImage(image, 800, 600).subscribe(
      result => {
        var files = result;
        if (result.size > 2000000 && (result.type !== "image/jpg" && result.type !== "image/jpeg" && result.type !== "image/png")) {
          this.subiendo = false;
          this.ErrorImg = true;
        } else {

          this.isFoto = true;
          var reader = new FileReader();

          reader.onload = (function (theFile) {
            return function (e) {
              document.getElementById("img").innerHTML =
                ['<img class="thumb" id="thumb" style="width:100%;height:100%;" src="', e.target.result, '" title="', '"/>'].join('');
            };
          })(files);
          reader.readAsDataURL(files);
          this.subiendo = false;
          this.imagen.push(files);
        }
      },
      error => {
        console.log('😢 Oh no!', error);
      }
    );
  }

  BorrarImagen() {
    this.isFoto = false;
    let imagen = document.getElementById("thumb")
    let padre = imagen.parentNode;
    padre.removeChild(imagen);
  }

  isCarga : boolean;
  agregar() {
    if ((this.imagen === undefined || this.imagen === null || this.imagen.length === 0) && (this.QRselect.Texto === "") ) {
      this.isProblema = true;
    } else {
     
      this.isCarga = true;
      const file = this.imagen;
     
      // if(this.QRselect.Texto !== ""){
      //   this.imagen = null;
      // }
      if(file[0] === undefined){
        this.currentFileUpload = null;
      }else{
        this.currentFileUpload = new Imgupload(file[0]);
        this.currentFileUpload.$key = Math.random();
      } 

      this.QRService.setValueQR(this.currentFileUpload, this.QRselect);
     
    }
  }

}

