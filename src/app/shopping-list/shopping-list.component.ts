import { Component } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListService]
})
export class ShoppingListComponent {
  constructor(private slService: ShoppingListService) {
  }

  ingredients: Ingredient[] = this.slService.getIngredients()
  // addIngredient(ingredient: Ingredient) {
  //   this.ingredients.unshift(ingredient)
  // }
}
