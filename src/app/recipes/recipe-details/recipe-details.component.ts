import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {
  @Input() currentRecipe: Recipe | undefined

  constructor(private slService: ShoppingListService) {
  }

  addToShoppingList() {
    if(this.currentRecipe?.ingredients) {
      this.slService.setIngredients(this.currentRecipe?.ingredients)
    }
  }
}
