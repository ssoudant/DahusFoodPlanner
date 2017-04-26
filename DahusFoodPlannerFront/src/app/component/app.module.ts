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

import { RouterModule } from '@angular/router';
import { RecipeService } from '../service/recipe.service';
import { DayService } from 'app/service/day.service';
import { ShoppingService } from 'app/service/shopping.service';
import { CategoryListComponent } from './category-list/category-list.component';
import { BasketEntryComponent } from './basket-entry/basket-entry.component';
import { CategoryComponent } from './category/category.component';

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
    CategoryListComponent,
    BasketEntryComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'shopping',
        component: ShoppingListComponent
      },
      {
        path: 'days',
        component: DayListComponent
      },
      {
        path: '**',
        component : ShoppingListComponent
      }
    ])
  ],
  providers: [RecipeService,
    DayService,
    ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

