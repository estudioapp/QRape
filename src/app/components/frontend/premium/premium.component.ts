import { Component, OnInit } from '@angular/core';
import { NewTokenMPService } from 'src/app/services/new-token-mp.service';
import { map, filter, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.css']
})
export class PremiumComponent implements OnInit {

  constructor(
    private phpTokenMP: NewTokenMPService
  ) {
    this.linkMP = "";
  }

  linkMP: any;

  ngOnInit() {
    console.log();

    this.phpTokenMP.setPaymentData(JSON.parse(localStorage.getItem("user")).uid)
    .subscribe(data => {
      this.linkMP = data.text();
    });

  }
}
