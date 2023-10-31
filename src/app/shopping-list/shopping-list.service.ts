import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  changeIngredients = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Тесто', 1),
    new Ingredient('Сыр', 1),
    new Ingredient('Помидоры', 2),
  ]

  getIngredients() {
    return this.ingredients.slice()
  }

  setIngredients(ingList: Ingredient[]) {
    this.ingredients.push(...ingList)
    this.changeIngredients.emit(this.ingredients.slice())
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient)
    return this.ingredients.slice()
  }
}
