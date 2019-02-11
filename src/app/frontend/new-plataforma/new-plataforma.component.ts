import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente';
import { WebCliente } from '../../interfaces/web-cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-plataforma',
  templateUrl: './new-plataforma.component.html',
  styleUrls: ['./new-plataforma.component.css']
})
export class NewPlataformaComponent implements OnInit {
  
  redesSociales : WebCliente;
  listClients : Cliente[];
  boolW;
  boolF;
  boolI;

  constructor( private clientService : ClienteService, private router: Router
    ) {
    this.redesSociales = {};
      this.boolF = false;
      this.boolI = false;
      this.boolW = false;
  }

  ngOnInit() {
    
    let cname = localStorage.getItem("cliente-chango");
    document.cookie = "login="+cname+";path=/;domain=changofree.com;";
    
    this.listClients = this.clientService.getListClients();
  }

  
  SendInfo(){
    
    this.clientService.SearchRegistForEmail(localStorage.getItem("cliente-chango"),this.listClients)
    .subscribe(data => {
      if(this.redesSociales.whatsapp === undefined){
        this.redesSociales.whatsapp = "No disponible"
      }
      if(this.redesSociales.instagram === undefined){
        this.redesSociales.instagram = "No disponible";
      }else if(this.redesSociales.instagram.indexOf("www.") === -1){
        this.boolI = true;
      }
      if(this.redesSociales.facebook === undefined){
        this.redesSociales.facebook = "No disponible";
      }else if(this.redesSociales.facebook.indexOf("www.") === -1){
        this.boolF = true;
      }
      if(!this.boolF && !this.boolI && !this.boolW){
        this.clientService.updateClient(this.redesSociales,data.web, data.$key);
        location.href="http://tienda.changofree.com/"+data.$key;
      }
    });
  }
}
