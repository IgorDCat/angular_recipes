import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Тесто', 1),
    new Ingredient('Сыр', 1),
    new Ingredient('Помидоры', 2),
  ]

  getIngredients() {
    return this.ingredients
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient)
    return this.ingredients.slice()
  }
}
