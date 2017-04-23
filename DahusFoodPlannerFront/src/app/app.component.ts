import { Component, OnInit } from '@angular/core';
import { RecipeEntryComponent } from './recipe-entry/recipe-entry.component';
import { Recipe } from './model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Dahus Food Planner';
  recipes: Recipe[];

  constructor() { }

  
  ngOnInit(): void {
  }
}
