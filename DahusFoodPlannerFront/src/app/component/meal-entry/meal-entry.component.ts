import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'app/model/meal';

@Component({
  selector: 'app-meal-entry',
  templateUrl: './meal-entry.component.html',
  styleUrls: ['./meal-entry.component.css']
})
export class MealEntryComponent implements OnInit {
  title: string;
  @Input() meal: Meal;

  constructor() { }

  ngOnInit() { }

}
