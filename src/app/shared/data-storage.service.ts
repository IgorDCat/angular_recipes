import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes(): Observable<Object> {
    const recipes: Recipe[] = this.recipeService.getRecipes()
    return this.http.put(
      'https://recipe-book-481dc-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
      recipes
    )
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(
      'https://recipe-book-481dc-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
      .subscribe(response => {
        this.recipeService.setRecipes(response)
      })
  }
}
