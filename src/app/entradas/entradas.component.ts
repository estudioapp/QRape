import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  constructor(
    private dashboardService : ClienteService
  ) { }
  listBlog : Blog[];

  ngOnInit() {
    this.dashboardService.blogList()
    .snapshotChanges()
    .subscribe(data => {
      this.listBlog = [];
      data.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.listBlog.push(x as Blog);
      });
    });
  }

}
