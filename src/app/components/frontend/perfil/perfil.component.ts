import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interfaces/usuario.model';
import { AuthService } from "../../../services/auth.service"
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  emailOnline: string;
  usuarioOnline: Cliente;

  constructor(
    public authService: AuthService,
    private clienteService : ClienteService
  ) { }

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
            }
          });
        });
    } else {
      this.usuarioOnline = this.clienteService.getGlobalCliente();
    }
  }

}
