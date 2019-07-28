import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/usuario.model';
import { GenerarQrService } from 'src/app/services/generar-qr.service';
import { QR } from 'src/app/interfaces/qr';
import { Router } from '@angular/router';

// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
declare var $: any;

@Component({
  selector: 'app-panel-frontend',
  templateUrl: './panel-frontend.component.html',
  styleUrls: ['./panel-frontend.component.css']
})
export class PanelFrontendComponent implements OnInit {

  emailOnline: string;
  usuarioOnline: Cliente;
  listQrWithFoto: QR[];
  listQrWithoutFoto: QR[];
  openModalInfoPremium: boolean;

  elementType = 'url';
  value = 'https://assets.econsultancy.com/images/resized/0002/4236/qr_code-blog-third.png';
  @ViewChild('result') resultElement: ElementRef;
  showQRCode: boolean = true;
  beforeUrl: string;

  isCloseCargados: boolean;
  isCloseNoCargados: boolean;

  constructor(
    private renderer: Renderer2,
    private clienteService: ClienteService,
    private QRservice: GenerarQrService,
    private Router: Router) {
    this.usuarioOnline = {
      Nombre: "",
      Email: ""
    };
    this.listQrWithoutFoto = [];
    this.listQrWithFoto = [];

    this.isCloseCargados = false;
    this.isCloseNoCargados = false;
    this.openModalInfoPremium = false;
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
    if (localStorage.getItem("user") === null) {
      this.Router.navigateByUrl("/intro");
    } else {


      this.emailOnline = JSON.parse(localStorage.getItem("user")).email;
      if (this.clienteService.getGlobalCliente() === null) {
        this.Router.navigateByUrl("/login");
      } else {
        this.getListQr();
        this.usuarioOnline = this.clienteService.getGlobalCliente();
        this.emailOnline = this.usuarioOnline.Email;
      }
    }
  }

  getListQr() {
    var listAuxQr = this.clienteService.getListOfQrClients();
    if (listAuxQr !== null) {
      this.listQrWithFoto = [];
      this.listQrWithoutFoto = [];
      listAuxQr.map(element => {
        if (element.Foto === undefined && element.Archivo === undefined && element.Texto === undefined && element.Video === undefined) {
          this.listQrWithoutFoto.push(element as QR);
        } else {
          element.aVencer = this.clienteService.calculateDaysToExpire(new Date(element.FechaCreacion));
          this.listQrWithFoto.push(element as QR);
        }
      });
    }
  }

  goQrs() {
    var scrollTo = $('#qrS');

    $('html, body').animate({
      scrollTop: (scrollTo.offset().top - $(window).scrollTop() + $(window).scrollTop())
    }, 1000);

  }


  openQr(key) {
    location.href = "https://qready.com.ar/vista/" + key;
  }

  closeModal(event) {
    this.openModalInfoPremium = false;
  }
}
