import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { select, Store } from '@ngrx/store';
import { Selectors } from '../../store/selectors';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] | undefined

  constructor(
    private store: Store<{ recipes: Recipe[] }>,
    private selectors: Selectors
  ) { }

  ngOnInit() {
    this.store
      .pipe(select(this.selectors.selectRecipes))
      .subscribe(state => this.recipes = state.recipes)
  }
}
