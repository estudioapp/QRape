import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-premium',
  templateUrl: './info-premium.component.html',
  styleUrls: ['./info-premium.component.css']
})
export class InfoPremiumComponent implements OnInit {

  @Output() isModal = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.isModal.emit(false);
  }
}
