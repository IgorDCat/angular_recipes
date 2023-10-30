import { Component } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Тесто', 1),
    new Ingredient('Сыр', 1),
    new Ingredient('Помидоры', 2),
  ]

  addIngredient(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient)
  }
}
