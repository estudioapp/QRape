import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente';
import {MatSnackBar} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.css']
})
export class PlataformasComponent implements OnInit {
  
  clientObject : Cliente;
  listClients : Cliente[];
  constructor(private clientService: ClienteService,
    public snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
  
  }

  ngOnInit() {
    this.clientObject = {};
    this.clientObject.hasta = "";
    this.listClients = [];
    this.clientService.clientsWithSnap()
    .snapshotChanges()
    .subscribe(data => {
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listClients.push(x);
      });
    });
  }


  ValidateForm(){
    this.validacionHasta();
    let aux = true;
    console.log(this.listClients);
    if(this.clientObject.email === undefined){
      this.openSnackBar("Ingrese un email valido por favor", "Ok");
    }else if(this.clientObject.email.length < 5 ){
      this.openSnackBar("Ingrese un email valido por favor", "Ok");
    }else{
      this.listClients.forEach(element => {
        if(this.clientObject.email === element.email){
          this.openSnackBar("Este email ya esta registrado. ¿Olvidaste tu contraseña? Ponte en contacto con nosotros." , "Ok, entendido!");
          aux = false;
        }
      });
    }
    if(aux){
      if(this.clientObject.marca !== undefined && this.clientObject.name !== undefined && this.clientObject.password !== undefined){
        this.clientService.insertClient(this.clientObject);
        localStorage.setItem("cliente-chango",this.clientObject.email);
        this.router.navigateByUrl("creando-tienda");
      }else{
        this.openSnackBar("Por favor revisá que el formulario haya sido completado correctamente.",'Ok, Gracias!');
      }
    } 

  }

  validacionHasta(){
    let f = new Date();        
    let diasDeEsteMes = new Date(f.getFullYear(), f.getMonth(), 0).getDate();
    let diaActual = Number(f.getDate());
    
    if(diaActual+15 < diasDeEsteMes){
      this.clientObject.hasta = (diaActual+15).toString()+"/"+ (f.getMonth()) + "/" + (f.getFullYear());
    }else{
      let aux = (diaActual + 15) - diasDeEsteMes;
      this.clientObject.hasta = aux.toString()+"/"+(f.getMonth()+1) + "/" + (f.getFullYear());
    }
    this.clientObject.creacion = (f.getDay())+"/"+(f.getMonth()) + "/" + (f.getFullYear());
  }

  openSnackBar(Message : string, Action : string) {
    this.snackBar.open(Message, Action, {
      duration: 7200,
    });
  }
}
