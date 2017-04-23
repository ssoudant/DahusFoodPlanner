import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEntryComponent } from './shopping-entry/shopping-entry.component';
import { IngredientEntryComponent } from './ingredient-entry/ingredient-entry.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeEntryComponent } from './recipe-entry/recipe-entry.component';
import { MealEntryComponent } from './meal-entry/meal-entry.component';
import { MealListComponent } from './meal-list/meal-list.component';
import { DayEntryComponent } from './day-entry/day-entry.component';
import { DayListComponent } from './day-list/day-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingEntryComponent,
    IngredientEntryComponent,
    IngredientListComponent,
    RecipeListComponent,
    RecipeEntryComponent,
    MealEntryComponent,
    MealListComponent,
    DayEntryComponent,
    DayListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
