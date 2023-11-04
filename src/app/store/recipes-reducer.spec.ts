import { Ingredient } from '../shared/ingredient.model';
import { recipesReducer } from './recipes.reducer';
import { SetRecipes } from './recipes.actions';

describe('recipes-reducer', () => {
  const testState = {
    recipes:  [{
      name: '',
      description: '',
      imagePath: '_',
      ingredients: [new Ingredient('', 0)]
    }]
  }
  const action: SetRecipes = {
    type: 'SET_RECIPES',
    payload: [{
      name: 'pizza',
      description: 'pizza descr',
      imagePath: '_',
      ingredients: [new Ingredient('pizza ing', 0)]
    }]
  }
  const result: typeof testState = recipesReducer(testState, action)

  it('should return state', () => {
    expect(result).toEqual({ recipes: action.payload })
  });

  it('state should be equal payload', () => {
    expect(result.recipes).toEqual(action.payload)
  });

})
