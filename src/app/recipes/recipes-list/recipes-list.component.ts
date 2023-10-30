import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  @Output() onSetRecipeDetails = new EventEmitter()

  recipes: Recipe[] = [
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

  selectRecipe(recipe: Recipe) {
    this.onSetRecipeDetails.emit(recipe)
  }
}
