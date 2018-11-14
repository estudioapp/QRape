import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../interfaces/cliente';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  listClients : Cliente[];
  email : string;
  password : string;

  constructor(
    private clientService : ClienteService,
    public snackBar: MatSnackBar,    
  ) { }

  ngOnInit() {
    this.listClients = [];
    this.clientService.clientsWithSnap()
    .snapshotChanges()
    .subscribe(data => {
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listClients.push(x);
      });
    })
  }

  validateAcount(){
    let aux = false;
    this.listClients.forEach(element => {
      if(element.email === this.email && element.password === this.password){
        aux = true; 
        localStorage.setItem("cliente-chango",element.email);
        let cname = localStorage.getItem("cliente-chango");
        document.cookie = "login="+cname+";path=/;domain=changofree.com;";
        location.href="http://tienda.changofree.com/"+element.$key;
      }
    });

    if(!aux){
      this.openSnackBar("Hubo un error al intentar de iniciar sesion, verificá que los datos ingresados sean los correctos", "ok!");
    }
  }

  openSnackBar(Message : string, Action : string) {
    this.snackBar.open(Message, Action, {
      duration: 7200,
    });
  }
}
