import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Selectors {
  selectRecipes = (state: any) => state.recipes
}
