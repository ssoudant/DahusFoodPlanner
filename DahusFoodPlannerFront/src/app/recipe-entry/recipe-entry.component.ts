import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-entry',
  templateUrl: './recipe-entry.component.html',
  styleUrls: ['./recipe-entry.component.css']
})
export class RecipeEntryComponent implements OnInit {
  title: string;
  recipe: any = {};

  constructor() { 
    this.title = 'Titre de la page';
    this.recipe.id=42;
    this.recipe.title='Titre de la recette';
  }

  ngOnInit() {
  }

}
