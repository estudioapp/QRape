import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/usuario.model';
import { GenerarQrService } from 'src/app/services/generar-qr.service';
import { QR } from 'src/app/interfaces/qr';

// import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-panel-frontend',
  templateUrl: './panel-frontend.component.html',
  styleUrls: ['./panel-frontend.component.css']
})
export class PanelFrontendComponent implements OnInit {

  emailOnline: string;
  usuarioOnline: Cliente;
  listQrWithFoto: QR[];
  listQrWithoutFoto : QR[];


  elementType = 'url';
  value = 'https://assets.econsultancy.com/images/resized/0002/4236/qr_code-blog-third.png';
  @ViewChild('result') resultElement: ElementRef;
  showQRCode: boolean = true;
  constructor(
    private renderer: Renderer2,
    private clienteService: ClienteService,
    private QRservice: GenerarQrService) {

  }

  render(e) {
    console.log(e.result);
    let element: Element = this.renderer.createElement('p');
    element.innerHTML = e.result;
    this.renderElement(element);
  }

  renderElement(element) {
    for (let node of this.resultElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.resultElement.nativeElement, node);
    }
    this.renderer.appendChild(this.resultElement.nativeElement, element);
  }



  ngOnInit() {
    this.emailOnline = JSON.parse(localStorage.getItem("user")).email;
    if (this.clienteService.getGlobalCliente() === null) {
      this.clienteService.getClientes()
        .snapshotChanges()
        .subscribe(data => {
          data.map(element => {
            let x = element.payload.toJSON();
            if (x["Email"] === this.emailOnline) {
              x["$key"] = element.key;
              this.usuarioOnline = x as Cliente;
              this.clienteService.setGlobalCliente(x as Cliente);
              this.getListQr();
            }
          });
        });
    } else {
      this.usuarioOnline = this.clienteService.getGlobalCliente();
      this.getListQr();
    }
  }

  getListQr() {
    this.QRservice.getQRs()
      .snapshotChanges()
      .subscribe(data => {
        this.listQrWithFoto = [];
        this.listQrWithoutFoto = [];

        data.map(element => {
          let y = element.payload.toJSON();
          y["$key"] = element.key;
          if (y["NombreUsuario"] === this.usuarioOnline.Email) {
            if(y["Foto"] !== undefined){
              this.listQrWithFoto.push(y as QR);
            }else{
              this.listQrWithoutFoto.push(y as QR);
            }
          }
        });
      });
  }
  openQr(key){
    location.href="https://qready.com.ar/vista/"+key;
  }
}
