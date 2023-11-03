import { RecipeUnion, SET_RECIPES } from './recipes.actions';
import { Ingredient } from '../shared/ingredient.model';

export const initialState = {
  recipes:  [{
    name: '',
    description: '',
    imagePath: '_',
    ingredients: [new Ingredient('', 0)]
  }]
}

export function recipesReducer(state = initialState, action: RecipeUnion) {
  switch (action.type) {
    case SET_RECIPES:
      return { ...state, recipes: action.payload };
    default: return state
  }
}
