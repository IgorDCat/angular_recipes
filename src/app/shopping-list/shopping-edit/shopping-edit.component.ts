import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
  @Output() addNewIngredient = new EventEmitter<Ingredient>()
  ingredientName = ''
  ingredientAmount = 0

  clearInputs() {
    this.ingredientName = ''
    this.ingredientAmount = 0
  }

  addIngredient() {
    if(this.ingredientName && this.ingredientAmount) {
      this.addNewIngredient.emit(new Ingredient(this.ingredientName, this.ingredientAmount))
      this.clearInputs()
    }
  }
}
