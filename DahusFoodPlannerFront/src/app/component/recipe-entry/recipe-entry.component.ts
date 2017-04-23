import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'app/model/recipe';

@Component({
  selector: 'app-recipe-entry',
  templateUrl: './recipe-entry.component.html',
  styleUrls: ['./recipe-entry.component.css']
})
export class RecipeEntryComponent implements OnInit {
  title: string;
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() { }

}
