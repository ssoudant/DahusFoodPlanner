import { Component, OnInit, Input } from '@angular/core';
import { BasketEntry } from 'app/model/basket-entry';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() basketEntry: BasketEntry;

  constructor() { }

  ngOnInit() {
  }

}
