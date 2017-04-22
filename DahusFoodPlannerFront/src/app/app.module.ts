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

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingEntryComponent,
    IngredientEntryComponent,
    IngredientListComponent,
    RecipeListComponent,
    RecipeEntryComponent,
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
