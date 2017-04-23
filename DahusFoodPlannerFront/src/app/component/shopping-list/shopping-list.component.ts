import { Component, OnInit } from '@angular/core';
import { ShoppingList } from 'app/model/shopping-list';
import { ShoppingService } from 'app/service/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingList = new ShoppingList();

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.shoppingService.getShoppingList().then(categories => this.shoppingList = categories);
  }

}
