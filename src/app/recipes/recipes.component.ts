import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  currRecipeDetails: Recipe | undefined

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.selectRecipe.subscribe((recipe: Recipe) => {
      this.currRecipeDetails = recipe
    })
  }
}
