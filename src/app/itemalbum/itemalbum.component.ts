import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itemalbum',
  templateUrl: './itemalbum.component.html',
  styleUrls: ['./itemalbum.component.css']
})
export class ItemalbumComponent implements OnInit {

  modelo;
  pack;
  cliente;
  comentario;
  listComentarios;
  lightBox;
  urlSeleccion;

  constructor(
    private activatedRoute: ActivatedRoute,
    private DashboardService: UsuarioService
  ) { 
    this.urlSeleccion = "";
    this.lightBox = false;
    this.listComentarios = [];
    this.comentario = "";
    this.isLike = false;
  }
  fotos: string[];
  url;
  tags;

  isLike;


  abrirFoto(url){
    this.urlSeleccion = url;
    this.lightBox = true;
  }

  ngOnInit() {
    const modelo = this.activatedRoute.snapshot.paramMap.get("nombredemodelo")
    this.DashboardService.returnListModelos()
      .snapshotChanges()
      .subscribe(data => {
        data.forEach(element => {
          let x = element.payload.toJSON();
          if (x["nombre"] === modelo) {
            x["$key"] = element.key;
            this.modelo = x;
          }
        });
      });

    this.DashboardService.returnListPacks()
      .snapshotChanges()
      .subscribe(Data => {
        Data.forEach(element => {
          let x = element.payload.toJSON();
          if (x["modelo"] === modelo && this.activatedRoute.snapshot.paramMap.get("nombrealbum") === x["nombrePack"]) {
            x["$key"] = element.key;
            this.pack = x;
            this.listComentarios = Object.values(this.pack.comentarios);
            this.fotos = this.pack.fotos;
            this.fotos = Object.values(this.fotos);
            this.tags = Object.values(this.pack.tag);
          }
        });
        this.url = "url(" + this.pack.portada + ")";
        this.DashboardService.returnListClient()
          .snapshotChanges()
          .subscribe(data => {
            let obj;
            data.forEach(element => {
              let x = element.payload.toJSON();
              x["$key"] = element.key;
              if (x["email"] === localStorage.getItem("cliente")) {
                this.cliente = x;
                if(Object.values(this.cliente.likes).indexOf(this.pack.nombrePack) === -1){
                  this.isLike = false;
                }else{
                  this.isLike = true;
                }
              }
            });
          });
      })
  }

  like(pack) {
    console.log(this.cliente);
    console.log(this.cliente.likes);
    let aux = Object.values(this.cliente.likes);
    let x = true;

    var index = aux.indexOf(pack.nombrePack);

    console.log(index);

    if(index !== -1){
      aux.splice(index,1);
      pack.likes--;
      this.modelo.likes--;
    }else{
      pack.likes++;
      this.modelo.likes++;
      aux.push(pack.nombrePack);
    }
    
    this.cliente.likes = aux;
    console.log(this.modelo);
    this.DashboardService.modificarModelo(this.modelo);
    this.DashboardService.modificarCliente(this.cliente);
    console.log(pack);
    this.DashboardService.modificarPack(pack);
  }
  enviarComentario(){
    if(localStorage.getItem("cliente") !== null){
      this.listComentarios.push(this.comentario);
      this.comentario = "";
      this.pack.comentarios = this.listComentarios;
      console.log(this.pack);
      this.DashboardService.modificarPack(this.pack);    
    }
  }
}
