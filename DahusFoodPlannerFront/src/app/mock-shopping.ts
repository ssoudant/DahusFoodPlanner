import { ShoppingList } from 'app/model/shopping-list';

export const SHOPPING_LIST: ShoppingList =
    {
        id: 1, name: 'Monoprix', categories: [
            {
                id: 1, name: 'Boucherie', basketEntries: [
                    { id: 1, ingredientId: 5, quantity: 250, measurement: 'g', done: false },
                    { id: 2, ingredientId: 2, quantity: 2, measurement: 'kg', done: false }
                ]
            },
            {
                id: 2, name: 'Poissonerie', basketEntries: [
                    { id: 1, ingredientId: 10, quantity: 250, measurement: 'g', done: false }
                ]
            }
        ]
    }
    