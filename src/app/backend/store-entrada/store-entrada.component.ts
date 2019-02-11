import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Blog } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-store-entrada',
  templateUrl: './store-entrada.component.html',
  styleUrls: ['./store-entrada.component.css']
})
export class StoreEntradaComponent implements OnInit {

  titulo1;
  titulo2;
  titulo3;
  titulo4;

  d4;
  d3;
  d2;
  d1;

  blog : Blog;
  constructor(
    private clienteService : ClienteService
  ) { 
    this.blog = {
      descripcion1:"",
      descripcion2:""
    }
  }

  ngOnInit() {
    this.clienteService.blogList();
  }
  storeBlog(){
    console.log(this.d1);
    this.blog.descripcion1 = this.d1;
    this.blog.descripcion2 = this.d2;
    this.blog.descripcion3 = this.d3;
    this.blog.descripcion4 = this.d4;
    this.blog.title1 = this.titulo1.replace(/ /g,"-");
    this.blog.title2 = this.titulo2;
    this.blog.title3 = this.titulo3;
    this.blog.title4 = this.titulo4;
    console.log(this.blog);
    this.clienteService.storeBlog(this.blog);
  }
}
