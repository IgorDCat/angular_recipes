import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  selectRecipe = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Пицца',
      'Рецепт вкусной пиццы',
      'https://cs8.pikabu.ru/avatars/2607/x2607423-868906487.png'
    ),
    new Recipe(
      'Пицца2',
      'Рецепт вкусной пиццы 2',
      'https://cs8.pikabu.ru/avatars/2607/x2607423-868906487.png'
    ),
  ]
  getRecipes() {
    return this.recipes.slice()
  }
}
