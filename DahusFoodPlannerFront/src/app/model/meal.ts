import { Recipe } from 'app/model/recipe';

export class Meal {
    id: number;
    title: string;
    recipes: Recipe[];
}
