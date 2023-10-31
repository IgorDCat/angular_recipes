import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  ingredientName = ''
  ingredientAmount = 0

  constructor(private slService: ShoppingListService) {
  }

  clearInputs() {
    this.ingredientName = ''
    this.ingredientAmount = 0
  }

  addIngredient() {
    if(this.ingredientName && this.ingredientAmount) {
      this.slService.addIngredient(new Ingredient(this.ingredientName, this.ingredientAmount))
      this.clearInputs()
    }
  }
}
