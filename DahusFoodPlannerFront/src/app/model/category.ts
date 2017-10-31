import { BasketEntry } from 'app/model/basket-entry';

export class Category {
    id: number;
    name : string;
    basketEntries: BasketEntry[];
}
