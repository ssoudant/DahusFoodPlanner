import { Injectable } from '@angular/core';
import { ShoppingList } from 'app/model/shopping-list';
import { SHOPPING_LIST } from '../mock-shopping';

@Injectable()
export class ShoppingService {

  constructor() { }

  getShoppingList() : Promise<ShoppingList> {
    return Promise.resolve(SHOPPING_LIST);
  }
}
