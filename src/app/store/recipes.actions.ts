import { Recipe } from '../recipes/recipe.model';

export const SET_RECIPES = 'SET_RECIPES';

export class SetRecipes {
  readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}

export type RecipeUnion = SetRecipes

