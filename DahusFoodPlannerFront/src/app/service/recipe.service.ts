import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { RECIPES } from "../mock-recipes";

@Injectable()
export class RecipeService {

  constructor() { }

  getRecipes() : Recipe[] {
    return RECIPES;
  }

}
