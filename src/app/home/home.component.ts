import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Menu: boolean;
  listadoPack;
  portada;
  fondo;
  fondoActivo;
  position: number;

  constructor(
    private dashboardService: UsuarioService
  ) {

    this.Menu = false;
    this.position = 0;
  }



  ngOnInit() {
    this.dashboardService.returnListPacks()
      .snapshotChanges()
      .subscribe(data => {
        this.listadoPack = [];
        data.forEach(element => {
          console.log("x");
          let x = element.payload.toJSON();
          console.log(x);
          x["$key"] = element.key;
          this.listadoPack.push(x);
        });
        this.fondo = "url(" + this.listadoPack[0].portada + ")";
        this.fondoActivo = this.listadoPack[0].portada;
        console.log(this.fondo);
        this.portada = this.listadoPack[0];
      });
    if (window.innerWidth > 769) {
      this.Menu = true;
    }
  }

  Seleccionar(obj) {
    this.portada = obj;
    this.fondo = "url(" + this.portada.portada + ")";
    this.fondoActivo = this.portada.portada

    this.Animaciones()
  }



  Animaciones() {
   
    document.getElementById("titulo1").style.animation = 'none';
    document.getElementById("titulo1").offsetHeight; /* trigger reflow */
    document.getElementById("titulo1").style.animation = null; 

    document.getElementById("subtitulo1").style.animation = 'none';
    document.getElementById("subtitulo1").offsetHeight; /* trigger reflow */
    document.getElementById("subtitulo1").style.animation = null; 

    document.getElementById("album").style.animation = 'none';
    document.getElementById("album").offsetHeight; /* trigger reflow */
    document.getElementById("album").style.animation = null; 


  }

  moverDerecha() {
    let position;
    let aux = 0;
    this.listadoPack.forEach(element => {
      if (element.portada === this.fondoActivo) {
        position = aux;
      } else {
        aux++;
      }
    });
    this.fondoActivo = this.listadoPack[position+1].portada;
    this.fondo = "url(" + this.listadoPack[position + 1].portada + ")";
    this.portada = this.listadoPack[position + 1];
    this.Animaciones()

  }
  moverIzquierda() {
    let position;
    let aux = 0;
    this.listadoPack.forEach(element => {
      if (element.portada === this.fondoActivo) {
        position = aux;
      } else {
        aux++;
      }
    });
    console.log(position)
    if(position>0){

      this.fondo = "url(" + this.listadoPack[position - 1].portada + ")";
      this.fondoActivo = this.listadoPack[position-1].portada;

      this.portada = this.listadoPack[position - 1];
      this.Animaciones()
    }

  }
}
