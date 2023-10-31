import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  selectRecipe = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Пицца',
      'Рецепт вкусной пиццы',
      'https://avatars.mds.yandex.net/i?id=964e7da484b21017f36de1a9fdb714ed_l-5735248-images-thumbs&n=13',
      [
        new Ingredient('Тесто', 1),
        new Ingredient('Сыр', 1),
        new Ingredient('Помидоры', 1)
      ]
    ),
    new Recipe(
      'Бургер',
      'Рецепт вкусного бургера',
      'https://obed-mytishi.ru/wp-content/uploads/2023/06/burg.jpg',
      [
        new Ingredient('Булочка', 2),
        new Ingredient('Мясо', 1),
        new Ingredient('Помидоры', 1)
      ]
    ),
  ]
  getRecipes() {
    return this.recipes.slice()
  }
}
