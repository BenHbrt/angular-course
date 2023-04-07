import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_960_720.jpg"),
    new Recipe("A Test Recipe 2", "This is simply a test 2", "https://cdn.pixabay.com/photo/2017/03/17/10/29/breakfast-2151201_960_720.jpg")
  ]

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
