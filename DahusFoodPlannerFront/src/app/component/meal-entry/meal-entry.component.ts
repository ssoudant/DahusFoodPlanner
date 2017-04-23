import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-entry',
  templateUrl: './meal-entry.component.html',
  styleUrls: ['./meal-entry.component.css']
})
export class MealEntryComponent implements OnInit {
  title: string;
  meal: any = {};

  constructor() { 
    this.title = 'Titre de la page Meal';
    this.meal.id=1;
    this.meal.title = 'Lunch';
  }

  ngOnInit() {
  }

}
