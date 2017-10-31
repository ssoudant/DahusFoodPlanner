import { Component, OnInit, Input } from '@angular/core';
import { BasketEntry } from 'app/model/basket-entry';

@Component({
  selector: 'app-basket-entry',
  templateUrl: './basket-entry.component.html',
  styleUrls: ['./basket-entry.component.css']
})
export class BasketEntryComponent implements OnInit {
  @Input() basketEntry: BasketEntry;
  
  constructor() { }

  ngOnInit() {
  }

  onDone(): void {
    this.basketEntry.done = !this.basketEntry.done;
  }
}
