import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../services/cliente.service';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-entrada-item',
  templateUrl: './entrada-item.component.html',
  styleUrls: ['./entrada-item.component.css']
})
export class EntradaItemComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private clientService : ClienteService
  ) { }

  blog : Blog;

  ngOnInit() {
    this.clientService.blogList()
    .snapshotChanges()
    .subscribe(data => {
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        if(x["title1"] === this.activatedRoute.snapshot.paramMap.get("title")){
          this.blog = x;
        }
      });
    });
  }

}
