import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { GenerarQrService } from '../services/generar-qr.service';
import { QR } from '../interfaces/qr';
import { Cliente } from '../interfaces/usuario.model';

@Component({
  selector: 'app-inicio-app',
  templateUrl: './inicio-app.component.html',
  styleUrls: ['./inicio-app.component.css']
})
export class InicioAppComponent implements OnInit {

  constructor(
    private Router: Router,
    private ClienteService: ClienteService,
  ) { }

  ngOnInit() {
    this.ClienteService.getDataToUser();
    
    setTimeout(() => {
      this.Validate();
    }, 3500);
  }
  Validate() {
    
    if (JSON.parse(localStorage.getItem("user")) === null) {
      this.Router.navigateByUrl("/login")
    } else {
      this.Router.navigateByUrl("/panel")
    }
  }

}
