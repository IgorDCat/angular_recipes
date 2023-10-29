import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Пицца',
      'Рецепт вкусной пиццы',
      'https://play-lh.googleusercontent.com/r179cHWnuPP9OAoE0vIC_WhmgsHcHxvmWEkQ43VpOB22Ex7XOsCmYrp-WdCbD7D0mA'
    ),
    new Recipe(
      'Пицца',
      'Рецепт вкусной пиццы',
      'https://play-lh.googleusercontent.com/r179cHWnuPP9OAoE0vIC_WhmgsHcHxvmWEkQ43VpOB22Ex7XOsCmYrp-WdCbD7D0mA'
    ),
  ]

}
