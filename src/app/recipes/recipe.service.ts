import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class RecipeService {
  selectRecipe = new EventEmitter<Recipe>()
  recipesChanged = new Subject<Recipe[]>()

  private recipes: Recipe[] = [

  ]
  getRecipes() {
    return this.recipes.slice()
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes
    this.recipesChanged.next(this.recipes.slice())
  }
}
