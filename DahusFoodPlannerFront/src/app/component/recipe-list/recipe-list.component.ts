import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from "../../model/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }
  
  getRecipes(): void {
    this.recipeService.getRecipes().then(recipes => this.recipes = recipes);
  }
}
