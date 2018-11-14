import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listClient : any[];

  constructor(
    private usuarioService : UsuarioService
  ){}

  ngOnInit() {
    this.usuarioService.clientList()
    .snapshotChanges()
    .subscribe(data => {
      this.listClient = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listClient.push(x);
      });
    });
  }
  moreDay(object){
    let f = new Date();     
    let ArrayFecha = object.hasta.split("/")   
    let diasDeEsteMes = new Date(ArrayFecha[2], ArrayFecha[1], 0).getDate();
    
    
    if(Number(ArrayFecha[0])+30 < diasDeEsteMes){
      object.hasta = (Number(ArrayFecha[0])+30).toString()+"/"+ (Number(ArrayFecha[1])) + "/" + (Number(ArrayFecha[2]));
    }else{
      let aux = (Number(ArrayFecha[0])+ 30) - diasDeEsteMes;
        if(Number(ArrayFecha[1])+1 > 11){
          console.log("año nuevo")
          object.hasta = aux.toString()+"/"+0+"/"+(Number(ArrayFecha[2])+1);
        }else{
          console.log("mes nuevo")
          object.hasta = aux.toString()+"/"+(Number(ArrayFecha[1])+1) + "/" + (Number(ArrayFecha[2]));
        }
    }
    this.usuarioService.updateFecha(object);
  }
}
